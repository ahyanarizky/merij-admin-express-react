import React, { Component } from 'react'
import { browserHistory, Link, Route, Router } from 'react-router'
import ReactDOM from 'react-dom'
import LayoutPlain from './layouts/plain'
import LayoutDashboard from './layouts/dashboard'
import Signin from './modules/signin'
import ForgotPassword from './modules/forgotpassword'
import Dashboard from './modules/dashboard'
import Ads from './modules/ads'
import Officers from './modules/officers'
import Channels from './modules/channels'
import Users from './modules/users'
import Profile from './modules/profile'
import Notfound from './modules/notfound'
import './styles/core/index.sass'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/dashboard'} component={LayoutDashboard}>
          <Route path={'/dashboard/welcome'} title='welcome' component={Dashboard} />
          <Route path={'/dashboard/ads'} title='ads' component={Ads} />
          <Route path={'/dashboard/officers'} title='officers' component={Officers} />
          <Route path={'/dashboard/channels'} title='channels' component={Channels} />
          <Route path={'/dashboard/users'} title='users' component={Users} />
          <Route path={'/dashboard/profile'} title='profile' component={Profile} />
          <Route path={'*'} title='404 Not found' component={Notfound} />
        </Route>
        <Route component={LayoutPlain}>
          <Route path={'/'} component={Signin} />
          <Route path={'/forgotpassword'} component={ForgotPassword} />
          <Route path={'*'} component={Notfound} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('merij'))
