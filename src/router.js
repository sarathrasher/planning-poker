
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import NewGamePage from './Pages/NewGamePage'
import Game from './Pages/Game'

export default function Router () {
  return <HashRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/new-game' component={NewGamePage} />
        <Route path='/game' component={Game} />
      </Switch>
    </div>
  </HashRouter>
}