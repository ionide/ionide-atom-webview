var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
var toml = require('toml');
var fs = require('fs');
window.$ = require('jquery');
var atomSpaceView = require('atom-space-pen-views');
var WebView = require('./WebView-View')

function wrappedFunScript() { 
var WebView__deactivate$, WebView__activate$, WebView___ctor$, WebViewHandler__webview, WebViewHandler__startingPage, WebViewHandler__startString, WebViewHandler__showWebView$, WebViewHandler__script, WebViewHandler__refresh$, WebViewHandler__port, WebViewHandler__parseResponse$Object_Object_, WebViewHandler__parameters, WebViewHandler__opener$, WebViewHandler__loadSettings$, WebViewHandler__linuxPrefix, WebViewHandler__host, WebViewHandler__get_webview$, WebViewHandler__get_startingPage$, WebViewHandler__get_startString$, WebViewHandler__get_script$, WebViewHandler__get_port$, WebViewHandler__get_parameters$, WebViewHandler__get_linuxPrefix$, WebViewHandler__get_host$, WebViewHandler__get_fakeProcess$, WebViewHandler__get_command$, WebViewHandler__get_build$, WebViewHandler__fakeProcess, WebViewHandler__command, WebViewHandler__close$, WebViewHandler__build, ViewsHelpers__jq$, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_, TupleString____Int32, TupleDisposable__Int32, String__StartsWith$, String__SplitWithoutOptions$, String__SplitWithOptions$, String__PrintFormatToString$, Settings__loadOrDefault$String___String___, Settings__loadOrDefault$String_1String, Settings__loadOrDefault$Int32_Int32, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__Disposable_Int32_Disposable_, Seq__ToArray$String___String___, Seq__OfArray$String___String___, Seq__IterateIndexed$String___String___, Seq__Iterate$Disposable_Disposable_, Seq__FromFactory$String___String___, Seq__FromFactory$Disposable_Disposable_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_, Seq__Fold$Disposable__Unit_Disposable__Unit_, Seq__Enumerator$String___String___, Seq__Enumerator$Disposable_Disposable_, ResizeArray__ToSeq$Disposable_Disposable_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Process__spawnSame$, Process__isWin$, Options___ctor$, Option__Iterate$IPanel_IPanel_, Option__Iterate$ChildProcess_ChildProcess_, Option__IsSome$Int32_Int32, Option__IsSome$ChildProcess_ChildProcess_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_, Option__GetValue$Int32_Int32, Option__GetValue$IPanel_IPanel_, Option__GetValue$ChildProcess_ChildProcess_, OpenEditorOptions___ctor$, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Disposable___ctor$Disposable_, Array__ZeroCreate$String___String___, Array__ZeroCreate$String_1String, Array__MapIndexed$String_1_String___String_String___, Array__Map$String_1_String___String_String___, Array__Length$String_1String, Array__FoldIndexed$String____String_1String____String, Array__FoldIndexed$String_1_String_1String_String, Array__Fold$String_1_String___String_String___, Array__Fold$String_1_String_1String_String, Array__Filter$String_1String, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$;
Array__BoxedLength$ = (function(xs)
{
    return xs.length;;
});
Array__Concat$String_1String = (function(xs)
{
    return Array__ConcatImpl$String_1String(Seq__ToArray$String___String___(xs));
});
Array__ConcatImpl$String_1String = (function(xss)
{
    return [].concat.apply([], xss);;
});
Array__Filter$String_1String = (function(f,xs)
{
    var ys = Array__ZeroCreate$String_1String(0);
    var j = 0;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      if (f(xs[i])) 
      {
        ys[j] = xs[i];
        null;
        j = (j + 1);
        null;
      }
      else
      {
        ;
      };
    };
    return ys;
});
Array__Fold$String_1_String_1String_String = (function(f,seed,xs)
{
    return Array__FoldIndexed$String_1_String_1String_String((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__Fold$String_1_String___String_String___ = (function(f,seed,xs)
{
    return Array__FoldIndexed$String____String_1String____String((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__FoldIndexed$String_1_String_1String_String = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__FoldIndexed$String____String_1String____String = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
});
Array__Map$String_1_String___String_String___ = (function(f,xs)
{
    return Array__MapIndexed$String_1_String___String_String___((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$String_1_String___String_String___ = (function(f,xs)
{
    var ys = Array__ZeroCreate$String___String___(Array__Length$String_1String(xs));
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__ZeroCreate$String_1String = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
CreateEnumerable_1_Disposable___ctor$Disposable_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_String_____ctor$String___ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
OpenEditorOptions___ctor$ = (function(split)
{
    var __this = this;
    __this.split = split;
});
Option__GetValue$ChildProcess_ChildProcess_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IPanel_IPanel_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsSome$ChildProcess_ChildProcess_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__Iterate$ChildProcess_ChildProcess_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$ChildProcess_ChildProcess_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$IPanel_IPanel_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IPanel_IPanel_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Options___ctor$ = (function(cwd)
{
    var __this = this;
    __this.cwd = cwd;
});
Process__isWin$ = (function(unitVar0)
{
    return String__StartsWith$(((window.process).platform), "win");
});
Process__spawnSame$ = (function(location,cmd)
{
    var _682;
    if ((cmd == "")) 
    {
      _682 = [];
    }
    else
    {
      _682 = String__SplitWithoutOptions$(cmd, [" "]);
    };
    var cmd_ = _682;
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    return (child_process.spawn(location, cmd_, options));
});
ResizeArray_1_Object__get_Count$Object_ = (function(xs,unitVar1)
{
    return xs.length;
});
ResizeArray_1_Object__get_Item$Object_ = (function(xs,index)
{
    return xs[index];
});
ResizeArray__ToSeq$Disposable_Disposable_ = (function(xs)
{
    return Seq__Unfold$Int32__Disposable_Int32_Disposable_((function(i)
    {
      if ((i < ResizeArray_1_Object__get_Count$Object_(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleDisposable__Int32(ResizeArray_1_Object__get_Item$Object_(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__Enumerator$Disposable_Disposable_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Fold$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__FoldIndexed$Disposable__Unit_Disposable__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_(f, seed, Seq__Enumerator$Disposable_Disposable_(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexedAux$Unit__Disposable_Unit__Disposable_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__String___Unit__String___ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$Disposable_Disposable_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Disposable___ctor$Disposable_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _94;
        return __.factory(_94);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$String___String___ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String_____ctor$String___(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _285;
        return __.factory(_285);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$Disposable_Disposable_ = (function(f,xs)
{
    var _102;
    return Seq__Fold$Disposable__Unit_Disposable__Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _102, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _305;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _305, xs);
});
Seq__OfArray$String___String___ = (function(xs)
{
    return Seq__Unfold$Int32__String___Int32_String___((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString____Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__ToArray$String___String___ = (function(xs)
{
    var ys = Array__ZeroCreate$String___String___(0);
    Seq__IterateIndexed$String___String___((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__Unfold$Int32__Disposable_Int32_Disposable_ = (function(f,seed)
{
    return Seq__FromFactory$Disposable_Disposable_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Disposable__Int32_Tuple_2_Disposable__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _72;
            return next(_72);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__String___Int32_String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _263;
            return next(_263);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Settings__loadOrDefault$Int32_Int32 = (function(map,def)
{
    try
    {
      var p = (((window.atom).project).getPaths())[0];
      var t = toml.parse(((fs.readFileSync((p + "/.ionide"))).toString()));
      ((window.console).log(t));
      return map(t);
    }
    catch(matchValue){
      return def;
    };
});
Settings__loadOrDefault$String_1String = (function(map,def)
{
    try
    {
      var p = (((window.atom).project).getPaths())[0];
      var t = toml.parse(((fs.readFileSync((p + "/.ionide"))).toString()));
      ((window.console).log(t));
      return map(t);
    }
    catch(matchValue){
      return def;
    };
});
Settings__loadOrDefault$String___String___ = (function(map,def)
{
    try
    {
      var p = (((window.atom).project).getPaths())[0];
      var t = toml.parse(((fs.readFileSync((p + "/.ionide"))).toString()));
      ((window.console).log(t));
      return map(t);
    }
    catch(matchValue){
      return def;
    };
});
String__PrintFormatToString$ = (function(s)
{
    var reg = /%[+\-* ]?\d*(?:\.(\d+))?(\w)/;
    function formatToString(rep) {
        s = s.replace(reg, function(match, precision, format) {
            switch (format) {
                case "f": case "F": return precision ? rep.toFixed(precision) : rep.toFixed(6);
                case "g": case "G": return rep.toPrecision(precision);
                case "e": case "E": return rep.toExponential(precision);
                case "A": return JSON.stringify(rep);
                default:  return rep;
            }
        });
        return reg.test(s) ? formatToString : s;
    }
    return formatToString;
});
String__SplitWithOptions$ = (function(s,delimiters,opts)
{
    var parts = String__SplitWithoutOptions$(s, delimiters);
    if ((opts == 1)) 
    {
      var x = "";
      return Array__Filter$String_1String((function(y)
      {
        return (x != y);
      }), parts);
    }
    else
    {
      return parts;
    };
});
String__SplitWithoutOptions$ = (function(s,delimiters)
{
    var folder = (function(inputs)
    {
      return (function(delimiter)
      {
        return Array__Concat$String_1String(Seq__OfArray$String___String___(Array__Map$String_1_String___String_String___((function(inp)
        {
          return inp.split(delimiter);
        }), inputs)));
      });
    });
    var state = [s];
    return (function(array)
    {
      return Array__Fold$String_1_String___String_String___(folder, state, array);
    })(delimiters);
});
String__StartsWith$ = (function(s,search)
{
    return (s.indexOf(search) == 0);
});
TupleDisposable__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_Int32__Disposable___ctor$Int32_Disposable_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
ViewsHelpers__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
WebViewHandler__close$ = (function(unitVar0)
{
    try
    {
      Option__Iterate$ChildProcess_ChildProcess_((function(p)
      {
        (p.kill());
        WebViewHandler__fakeProcess = {Tag: 0.000000};
      }), WebViewHandler__fakeProcess);
      return Option__Iterate$IPanel_IPanel_((function(ed)
      {
        var o = (((window.atom).workspace).paneForItem(ed));
        var _464;
        (o["destroy"])(_464);
        WebViewHandler__webview = {Tag: 0.000000};
      }), WebViewHandler__webview);
    }
    catch(matchValue){
      ;
    };
});
WebViewHandler__get_build$ = (function()
{
    return "";
});
WebViewHandler__get_command$ = (function()
{
    return "packages/FAKE/tools/FAKE.exe";
});
WebViewHandler__get_fakeProcess$ = (function()
{
    return {Tag: 0.000000};
});
WebViewHandler__get_host$ = (function()
{
    return "";
});
WebViewHandler__get_linuxPrefix$ = (function()
{
    return "";
});
WebViewHandler__get_parameters$ = (function()
{
    return [];
});
WebViewHandler__get_port$ = (function()
{
    return 8083;
});
WebViewHandler__get_script$ = (function()
{
    return "";
});
WebViewHandler__get_startString$ = (function()
{
    return "";
});
WebViewHandler__get_startingPage$ = (function()
{
    return "";
});
WebViewHandler__get_webview$ = (function()
{
    return {Tag: 0.000000};
});
WebViewHandler__loadSettings$ = (function(unitVar0)
{
    WebViewHandler__linuxPrefix = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.linuxPrefix;
    }), "mono");
    WebViewHandler__command = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.command;
    }), "packages/FAKE/tools/FAKE.exe");
    WebViewHandler__host = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.host;
    }), "localhost");
    WebViewHandler__port = Settings__loadOrDefault$Int32_Int32((function(s)
    {
      return s.WebPreview.port;
    }), 8888);
    WebViewHandler__script = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.script;
    }), "build.fsx");
    WebViewHandler__build = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.build;
    }), "Serve");
    WebViewHandler__startString = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.startString;
    }), "listener started");
    WebViewHandler__parameters = Settings__loadOrDefault$String___String___((function(s)
    {
      return s.WebPreview.parameters;
    }), []);
    WebViewHandler__startingPage = Settings__loadOrDefault$String_1String((function(s)
    {
      return s.WebPreview.startingPage;
    }), "");
});
WebViewHandler__opener$ = (function(uri_)
{
    try
    {
      var uri = String__SplitWithOptions$(uri_, ["://"], 1);
      if ((uri[0] == "ionide-webpreview")) 
      {
        return new WebView(uri[1]);
      }
      else
      {
        return null;
      };
    }
    catch(matchValue){
      return null;
    };
});
WebViewHandler__parseResponse$Object_Object_ = (function(o)
{
    if (((o != undefined) && (o != false))) 
    {
      var str = o.toString();
      if ((str.indexOf(WebViewHandler__startString) >= 0)) 
      {
        Option__Iterate$IPanel_IPanel_((function(w)
        {
          var clo2 = (w["openPreview"]);
          return (function(arg20)
          {
            return clo2(arg20);
          })(((((WebViewHandler__host + ":") + WebViewHandler__port.toString()) + "/") + WebViewHandler__startingPage));
        }), WebViewHandler__webview);
      }
      else
      {
        ;
      };
      ((window.console).log(o.toString()));
    }
    else
    {
      ;
    };
});
WebViewHandler__refresh$ = (function(unitVar0)
{
    var wv = ViewsHelpers__jq$(".webview");
    var ignored0 = (wv.attr("src", (wv.attr("src"))));
});
WebViewHandler__showWebView$ = (function(unitVar0)
{
    if (Option__IsSome$ChildProcess_ChildProcess_(WebViewHandler__fakeProcess)) 
    {
      WebViewHandler__close$();
    }
    else
    {
      ;
    };
    WebViewHandler__loadSettings$();
    ((((window.atom).workspace).open(((("ionide-webpreview://" + WebViewHandler__host) + ":") + WebViewHandler__port.toString()), (new OpenEditorOptions___ctor$("right")))).done((function(ed)
    {
      WebViewHandler__webview = {Tag: 1.000000, Value: ed};
    })));
    var _618;
    if (Process__isWin$()) 
    {
      var clo1 = String__PrintFormatToString$("%s %s port=%d");
      var args = (function(arg10)
      {
        var clo2 = clo1(arg10);
        return (function(arg20)
        {
          var clo3 = clo2(arg20);
          return (function(arg30)
          {
            return clo3(arg30);
          });
        });
      })(WebViewHandler__script)(WebViewHandler__build)(WebViewHandler__port);
      var args_ = Array__Fold$String_1_String_1String_String((function(acc)
      {
        return (function(e)
        {
          return ((acc + " ") + e);
        });
      }), args, WebViewHandler__parameters);
      _618 = Process__spawnSame$(WebViewHandler__command, args_);
    }
    else
    {
      var _clo1 = String__PrintFormatToString$("%s %s %s port=%d");
      var _args = (function(arg10)
      {
        var clo2 = _clo1(arg10);
        return (function(arg20)
        {
          var clo3 = clo2(arg20);
          return (function(arg30)
          {
            var clo4 = clo3(arg30);
            return (function(arg40)
            {
              return clo4(arg40);
            });
          });
        });
      })(WebViewHandler__command)(WebViewHandler__script)(WebViewHandler__build)(WebViewHandler__port);
      var _args_ = Array__Fold$String_1_String_1String_String((function(acc)
      {
        return (function(e)
        {
          return ((acc + " ") + e);
        });
      }), _args, WebViewHandler__parameters);
      _618 = Process__spawnSame$(WebViewHandler__linuxPrefix, _args_);
    };
    var cp = _618;
    var ignored0 = ((cp.stdout).on("readable", (function(x)
    {
      return WebViewHandler__parseResponse$Object_Object_(((cp.stdout).read(x)));
    })));
    var _ignored0 = ((cp.stderr).on("readable", (function(x)
    {
      return (function(o)
      {
        if (((o != undefined) && (o != null))) 
        {
          return ((window.console).error(o.toString()));
        }
        else
        {
          ;
        };
      })(((cp.stdout).read(x)));
    })));
    WebViewHandler__fakeProcess = {Tag: 1.000000, Value: cp};
});
WebView___ctor$ = (function(unitVar0)
{
    var __this = this;
    {};
    __this.subscribers = [];
});
WebView__activate$ = (function(x,state)
{
    (((window.atom).workspace).addOpener((function(uri_)
    {
      return WebViewHandler__opener$(uri_);
    })));
    var s = (((window.atom).commands).add("atom-workspace", "Ionide: Show Web View", (function(arg00_)
    {
      return WebViewHandler__showWebView$();
    })));
    var s2 = (((window.atom).commands).add("atom-workspace", "Ionide: Refresh Wev View", (function(arg00_)
    {
      return WebViewHandler__refresh$();
    })));
    var s3 = (((window.atom).commands).add("atom-workspace", "Ionide: Close Web View", (function(arg00_)
    {
      return WebViewHandler__close$();
    })));
    x.subscribers.push(s);
    x.subscribers.push(s2);
});
WebView__deactivate$ = (function(x,unitVar1)
{
    Seq__Iterate$Disposable_Disposable_((function(s)
    {
      return (s.dispose());
    }), ResizeArray__ToSeq$Disposable_Disposable_(x.subscribers));
    (x.subscribers = []);
});
WebViewHandler__fakeProcess = WebViewHandler__get_fakeProcess$();
WebViewHandler__webview = WebViewHandler__get_webview$();
WebViewHandler__linuxPrefix = WebViewHandler__get_linuxPrefix$();
WebViewHandler__command = WebViewHandler__get_command$();
WebViewHandler__host = WebViewHandler__get_host$();
WebViewHandler__port = WebViewHandler__get_port$();
WebViewHandler__script = WebViewHandler__get_script$();
WebViewHandler__build = WebViewHandler__get_build$();
WebViewHandler__startString = WebViewHandler__get_startString$();
WebViewHandler__parameters = WebViewHandler__get_parameters$();
WebViewHandler__startingPage = WebViewHandler__get_startingPage$();
return [(function(ign)
{
    return (new WebView___ctor$());
}), (function(_this)
{
    return WebView__deactivate$(_this);
}), (function(_this)
{
    return (function(p0)
    {
      return WebView__activate$(_this, p0);
    });
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = IonideWebView = {
deactivate: function() {
  return _funcs[1](_self); },
activate: function(p1) {
  return _funcs[2](_self)(p1); }
};