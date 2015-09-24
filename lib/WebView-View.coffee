{$, $$$, ScrollView} = require 'atom-space-pen-views'

module.exports =
class WebView extends ScrollView
  @content: ->
      @div class: 'native-key-bindings', tabindex: -1



  constructor: (@editorId, @filePath) ->
    super

  getTitle: ->
      "Ionide: Web Preview"

  attached: ->
    @html $$$ ->
      @div class: 'loader'

  openPreview: (url) =>
    @html $$$ ->
       @iframe class: 'webview', src: ("http://" + url)
