import React, { Fragment } from 'react'
import PublicView from './pages/PublicView.js'
import AdminView from './pages/AdminView.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PublicView} />
          <Route path="/admin" exact component={AdminView} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}
export default App; 