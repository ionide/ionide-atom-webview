[<ReflectedDefinition>]
module Ionide.WebView

open System
open System.Text.RegularExpressions
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open Atom
open Atom.FSharp

[<ReflectedDefinition>]
[<AutoOpen>]
module Bindings =
    [<JSEmitInline("new WebView({0})")>]
    let NewWebView (url : string) : FunScript.TypeScript.atom.ScrollView = failwith "JS"


    type IWorkspace with
        [<FunScript.JSEmitInline("({0}.addOpener({1}))")>]
        member __.addOpener(cb: string -> obj) : unit = failwith "JS"


[<ReflectedDefinition>]
[<AutoOpen>]
module Dynamic =
        [<JSEmitInline("({0}[{1}])")>]
        let (?) (ob: obj) (prop: string): 'a = failwith "never"

        [<JSEmitInline("({0}[{1}] = {2})")>]
        let (?<-) (ob: obj) (prop: string) (value: 'a): unit = failwith "never"



module WebViewHandler =
    let mutable linuxPrefix = ""
    let mutable command = "packages/FAKE/tools/FAKE.exe"
    let mutable host = ""
    let mutable port = 8083
    let mutable script = ""
    let mutable build = ""
    let mutable startString = ""
    let mutable private webview : IPanel option = None


    let parseResponse o =
        if JS.isDefined o && o <> null then
            let str =  o.ToString ()
            if str.Contains startString then
                Globals.atom.workspace._open("ionide-webpreview://" + host + ":" + (string port), {split = "right"})._done((fun ed ->
                    webview <- Some ed
                ) |> unbox<Function>)
            Globals.console.log <| o.ToString ()
        ()

    let loadSettings () =
        linuxPrefix <- Settings.loadOrDefault (fun s -> s.WebPreview.linuxPrefix) "mono"
        command <- Settings.loadOrDefault (fun s -> s.WebPreview.command) "packages/FAKE/tools/FAKE.exe"
        host <- Settings.loadOrDefault (fun s -> s.WebPreview.host) "localhost"
        port <- Settings.loadOrDefault (fun s -> s.WebPreview.port) 8888
        script <- Settings.loadOrDefault (fun s -> s.WebPreview.script) "build.fsx"
        build <- Settings.loadOrDefault (fun s -> s.WebPreview.build) "Serve"
        startString <- Settings.loadOrDefault (fun s -> s.WebPreview.startString) "listener started"
        ()

    let showWebView () =
        loadSettings ()
        let cp =
            if Process.isWin () then
                let args = sprintf "%s %s port=%d" script build port
                Process.spawnSame command args
            else
                let args = sprintf "%s %s %s port=%d" command script build port
                Process.spawnSame linuxPrefix args

        cp.stdout.on ("readable", unbox<Function> (cp.stdout.read >> parseResponse )) |> ignore
        ()



    let opener (uri' : string) =
        try
            let uri = uri'.Split([| "://" |], StringSplitOptions.RemoveEmptyEntries )
            if uri.[0] = "ionide-webpreview" then
                NewWebView uri.[1] |> unbox<obj>
            else
                null |> unbox<obj>
        with
        | _ -> null |> unbox<obj>


type WebView() =
    let subscribers = ResizeArray ()


    member x.activate(state:obj) =
        Globals.atom.workspace.addOpener WebViewHandler.opener
        let s = Globals.atom.commands.add ("atom-workspace", "Ionide: Show Web View", WebViewHandler.showWebView |> unbox<Function>)
        subscribers.Add s
        ()

    member x.deactivate() =
        subscribers |> Seq.iter (fun s -> s.dispose ())
        subscribers.Clear ()
        ()
