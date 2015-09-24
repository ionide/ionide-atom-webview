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
        [<FunScript.JSEmitInline("({0}.paneForItem({1}))")>]
        member __.paneForItem(o : obj) : obj = failwith "JS"


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
    let mutable parameters = [||]
    let mutable startingPage = ""
    let mutable private webview : IPanel option = None
    let mutable fakeProcess : ChildProcess Option = None



    let parseResponse o =
        if JS.isDefined o && o <> null then
            let str =  o.ToString ()
            if str.Contains startString then
                webview |> Option.iter (fun w -> w?openPreview(host + ":" + (string port) + "/" + startingPage ))
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
        parameters <- Settings.loadOrDefault (fun s -> s.WebPreview.parameters) [||]
        startingPage <- Settings.loadOrDefault (fun s -> s.WebPreview.startingPage) ""
        ()

    let close () =
        try
            fakeProcess |> Option.iter (fun p ->
                p.kill ()
                fakeProcess <- None)
            webview |> Option.iter (fun ed ->
                let o = Globals.atom.workspace.paneForItem(ed)
                o?destroy()
                webview <- None
                )
        with
        | _ -> ()  

    let showWebView () =
        if fakeProcess.IsSome then close ()
        loadSettings ()
        Globals.atom.workspace._open("ionide-webpreview://" + host + ":" + (string port), {split = "right"})._done((fun ed ->
            webview <- Some ed
        ) |> unbox<Function>)
        let cp =
            if Process.isWin () then
                let args = sprintf "%s %s port=%d" script build port
                let args' = parameters |> Array.fold (fun acc e -> acc + " " + e) args

                Process.spawnSame command args'
            else
                let args = sprintf "%s %s %s port=%d" command script build port
                let args' = parameters |> Array.fold (fun acc e -> acc + " " + e) args
                Process.spawnSame linuxPrefix args'

        cp.stdout.on ("readable", unbox<Function> (cp.stdout.read >> parseResponse )) |> ignore
        cp.stderr.on ("readable", unbox<Function> (cp.stdout.read >> (fun o -> if JS.isDefined o && o <> null then Globals.console.error  <| o.ToString ()) )) |> ignore
        fakeProcess <- Some cp
        ()

    let refresh () =
        let wv = jq ".webview"
        wv.attr ("src", wv.attr("src") ) |> ignore
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
        let s2 = Globals.atom.commands.add ("atom-workspace", "Ionide: Refresh Wev View", WebViewHandler.refresh |> unbox<Function>)
        let s3 = Globals.atom.commands.add ("atom-workspace", "Ionide: Close Web View", WebViewHandler.close |> unbox<Function>)
        subscribers.Add s
        subscribers.Add s2
        ()

    member x.deactivate() =
        subscribers |> Seq.iter (fun s -> s.dispose ())
        subscribers.Clear ()
        ()
