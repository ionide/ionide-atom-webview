# Ionide-Webview

It's part of [Ionide](http://ionide.io) plugin suite.
In-editor preview of web applications.

## Configuration

`ionide-webview` allows the user to override the default conventions used to run and preview web applications. To do so You need to create an `.ionide` file in the root folder of Your project opened by Atom. The configuration file uses the [TOML](https://github.com/toml-lang/toml) language.

Here is the default configuration values used if the `.ionide` file doesn't exist or some entry is missing:

```TOML
[WebPreview]
linuxPrefix = "mono"
command = "packages/FAKE/tools/FAKE.exe"
host = "localhost"
port = 8888
script = "build.fsx"
build = "Serve"
startString = "listener started"
parameters = []
startingPage = ""
```

* linuxPrefix - command used as prefix on Linux / Mac - usually `sh` or `mono`

* command - path to `FAKE.exe`

* host - address of webpage displayed in WebPreview - usually `localhost`

* port - port of webpage displayed in WebPreview (also passed to FAKE as environmental variable)

* script - FAKE build script passed to FAKE - usually `build.fsx`

* build - FAKE build target executed to start WebPreview

* startString - string which needs to be printed out in standard I/O to let know WebPreview to display webpage

* parameters - list of parameters passed to FAKE.exe

* startingPage - webpage displayed in WebPreview - usually ` ` or `index.html`


## Build

* Clone this repository
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Max) to build projects
* Go to `release` folder and run `apm link` to create symbolic link between plugin and Atom's plugins folder
* Run Atom

## Contributing and copyright

The project is hosted on [GitHub](https://github.com/ionide/ionide-webview) where you can [report issues](https://github.com/ionide/ionide-webview/issues), fork
the project and submit pull requests.

The library is available under [MIT license](https://github.com/ionide/ionide-webview/blob/master/LICENSE.md), which allows modification and
redistribution for both commercial and non-commercial purposes.
