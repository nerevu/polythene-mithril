import m from "mithril"
import { Dialog, Button } from "polythene-mithril"

# Component CSS
import "polythene-css/dist/polythene.css"

# Default Material Design styles including Roboto font
import "polythene-css/dist/polythene-typography.css"

App =
  view: ->
    m "div", [
      m Button, {
        raised: true
        label: "Open dialog"
        events:
          onclick: ->
            Dialog.show(
              title: "Hello"
              body: "Click background to hide or press ESCAPE."
              backdrop: true
            )
      }
      m(Dialog)
    ]

m.mount(document.body, App)
