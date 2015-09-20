{$, $$$, ScrollView} = require 'atom-space-pen-views'

module.exports =
class WebView extends ScrollView
  @content: (url) ->
      @div class: 'native-key-bindings', tabindex: -1, =>
        @iframe class: 'webview', src: ("http://" + url)

  constructor: (@editorId, @filePath) ->
    super

  getTitle: () ->
      "Ionide: Web Preview"
