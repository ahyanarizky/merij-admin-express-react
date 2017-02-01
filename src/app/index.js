import React, { Component } from 'react'
import { browserHistory, Link, Route, Router } from 'react-router'
import ReactDOM from 'react-dom'
import LayoutPlain from './layouts/plain'
import Signin from './modules/signin'
import Notfound from './modules/notfound'
import './styles/core/index.sass'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={LayoutPlain}>
          <Route path={'/'} component={Signin} />
          <Route path={'*'} component={Notfound} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('merij'))
