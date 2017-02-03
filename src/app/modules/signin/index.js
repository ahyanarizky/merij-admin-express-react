import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import Alert from '../../components/alert'

export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorFeedback: null,
      errorTypeWarning: true,
      isPasswordShow: false,
      isProcess: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let refs = this.refs
    let email = refs.email.value.trim()
    let password = refs.password.value
    let keepme = refs.keepme.checked

    if(!email) {
      this.setState({
        errorFeedback: {
          'title': 'Opps..',
          'text': 'Email must be filled'
        },
        errorTypeWarning: true
      })
    } else if(!password) {
      this.setState({
        errorFeedback: {
          'title': 'Opps..',
          'text': 'Password must be filled'
        },
        errorTypeWarning: true
      })
    } else if(email != 'admin@merij.co' || password != 'merij') {
      this.setState({
        errorFeedback: {
          'title': 'Oh no!',
          'text': 'Sorry, we couldn\'t find an account with that username and password'
        },
        errorTypeWarning: false
      })
    } else {
      this.setState({
        isPasswordShow: false,
        isProcess: true
      })

      setTimeout(() => {
        browserHistory.push('/dashboard/welcome')
      }, 1000)
    }
  }

  handleShowPassword() {
    if(!this.state.isProcess) {
      if(this.state.isPasswordShow) this.setState({isPasswordShow: false})
      else this.setState({isPasswordShow: true})
    } else this.setState({isPasswordShow: false})
  }

  render() {
    let passwordType = !this.state.isPasswordShow ? 'password' : 'text'
    let passwordIcon = 'fa '
    passwordIcon += !this.state.isPasswordShow ? 'fa fa-eye' : 'fa fa-eye-slash'

    let errorType =  'alert '
    errorType += this.state.errorTypeWarning ? 'alert-warning' : 'alert-danger'
    let errorFeedback = !this.state.errorFeedback ? null : (
      <Alert className={errorType} title={this.state.errorFeedback.title} text={this.state.errorFeedback.text} />
    )

    let disabled = !this.state.isProcess ? null : 'disabled'
    let buttonProcessText = !this.state.isProcess ? 'Sign in' : 'Loading..'

    return (
      <div className="container">
        <div className="logo">
          <img src="/assets/image/logo-500x215.png" />
          <span className="subtext">Officer Site</span>
        </div>
        <div className="space lg"></div>
        <div className="row">
          <div className="col-sm-offset-4 col-sm-4">
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              { errorFeedback }
              <div className="form-group">
                <label className="sr-only">Email address</label>
                <input ref="email" type="email" className="form-control" placeholder="Email" disabled={disabled} />
              </div>
              <div className="form-group">
                <label className="sr-only">Password</label>
                <div className="input-group">
                  <input ref="password" type={passwordType} className="form-control" placeholder="Password" disabled={disabled} />
                  <span className="input-group-addon with-button" onClick={this.handleShowPassword.bind(this)} disabled={disabled}>
                    <i className={passwordIcon}></i>
                  </span>
                </div>
                <div className="form-action text-right">
                  <Link to="forgotpassword">Forgot Password?</Link>
                </div>
              </div>
              <div className="space sm"></div>
              <button type="submit" className="btn btn-merij btn-block" disabled={disabled}>{buttonProcessText}</button>
              <div className="space"></div>
              <div className="checkbox" disabled={disabled}>
                <label><input ref="keepme" type="checkbox" disabled={disabled} /> Keep me signed in</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
