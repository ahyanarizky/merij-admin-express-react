import React, { Component } from 'react'
import { browserHistory, Link, Route, Router } from 'react-router'
import ReactDOM from 'react-dom'
import Signin from './modules/signin'
import Notfound from './modules/notfound'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Signin} />
        <Route path={'*'} component={Notfound} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('merij'))
