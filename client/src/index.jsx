import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import ReactDOM from 'react-dom'
import { dispatch } from './rails_api/dispatch.js'

import Home from './components/home/home.component.jsx'
import Game from './components/game/game.component.jsx'


<<<<<<< HEAD
(() => {
  let username = localStorage.getItem("username") || "Anon"
  let uniqueId = localStorage.getItem("uniqueId") || false
  let status = uniqueId ? "Found" : "Newly Created"
  dispatch.reconcileUserProfile(username, uniqueId, status)
  dispatch.getStockData("DEFAULT")
})()
=======
// (function manageProfile() {
//   let username = localStorage.getItem("username") || "anon"
//   let uniqueId = localStorage.getItem("uniqueId") || false
//   let status = uniqueId ? "Found" : "Newly Created"
//   dispatch.setUserProfile(username, uniqueId, status)
// })()
>>>>>>> 84f7318adc645df00b82ed55a9d20811f690dffb

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/game' component={Game} />
    </div>
  </Router>,
  document.getElementById('container')
)
