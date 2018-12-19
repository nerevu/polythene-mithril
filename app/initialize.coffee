import m from 'mithril'
import {Application} from './application'

m.route.mode = 'hash'

document.addEventListener 'DOMContentLoaded', ->
  location = document.getElementById 'container'
  m.mount location, Application
