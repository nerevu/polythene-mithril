import m from 'mithril'
import { Icon } from "polythene-mithril"

starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

Application =
  oninit: (vnode) ->
    console.log 'initializing app'

  oncreate: (vnode) ->
    console.log 'creating app'

  onbeforeupdate: (vnode) ->
    console.log 'before updating app'

  onupdate: (vnode) ->
    console.log 'updating app'

  view: (vnode) ->
    m 'div', [
      m(Icon, {svg: content: m.trust(starsSVG)})
    ]

export {Application}
