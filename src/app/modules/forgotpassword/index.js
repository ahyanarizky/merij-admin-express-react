import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorFeedback: null,
      errorTypeWarning: true,
      successFeedback: null,
      sentMailCount: 0,
      tryAgainTimeout: 5,
      isProcess: false,
      isSent: false,
      isTryAgain: false
    }
  }

  requestResetPassword() {
    setTimeout(() => {
      this.setState({
        errorFeedback: null,
        successFeedback: 'We sent you an email with instructions on how to reset your password',
        sentMailCount: this.state.sentMailCount + 1,
        isProcess: true,
        isSent: true
      })
    }, 1000)
  }

  handleSubmit(e) {
    e.preventDefault()

    if(!this.state.isProcess && !this.state.isSent) {
      let refs = this.refs
      let email = refs.email.value.trim()

      if(!email) {
        this.setState({
          errorFeedback: 'Opps, Email must be filled',
          errorTypeWarning: true
        })
      } else if(email != 'admin@merij.co') {
        this.setState({
          errorFeedback: 'Sorry, we couldn\'t find an account with that username',
          errorTypeWarning: false
        })
      } else {
        this.setState({
          isProcess: true
        })

        this.requestResetPassword()
      }
    }
  }

  handleTryAgain(e) {
    e.preventDefault()

    if(this.state.isSent && !this.state.isTryAgain) {
      this.setState({
        isSent: false,
        isTryAgain: true
      })

      let tryAgainTimeout = null
      let tryAgainTimeoutDefault = this.state.tryAgainTimeout
      let tryAgainInterval = setInterval(() => {
        tryAgainTimeout = this.state.tryAgainTimeout - 1

        if(tryAgainTimeout == 0) {
          clearInterval(tryAgainInterval)
          this.setState({
            tryAgainTimeout: tryAgainTimeoutDefault,
            isTryAgain: false
          })
          this.requestResetPassword()
        } else this.setState({tryAgainTimeout: tryAgainTimeout})
      }, 1000)
    }
  }

  render() {
    let errorType =  'alert '
    errorType += this.state.errorTypeWarning ? 'alert-warning' : 'alert-danger'
    let errorFeedback = !this.state.errorFeedback ? null : (
      <div className={errorType} role="alert">{this.state.errorFeedback}</div>
    )

    let tryAgainDisabled = !this.state.isTryAgain ? null : 'disabled'
    let successFeedback = !this.state.successFeedback ? null : (
      <div className="alert alert-info text-left" role="alert">
        <p><strong>You've got new mail! { this.state.sentMailCount > 1 ? '(' + this.state.sentMailCount +')' : null }</strong></p>
        <p>{this.state.successFeedback}. If you have not received yet, please click <a onClick={this.handleTryAgain.bind(this)} disabled={tryAgainDisabled}><strong>Try again</strong></a></p>
      </div>
    )

    let disabled = !this.state.isProcess ? null : 'disabled'
    let buttonProcessText = !this.state.isProcess ? 'Send me reset link' : 'Loading..'
    buttonProcessText = this.state.isProcess && this.state.isSent  ? 'Sent!' : buttonProcessText
    buttonProcessText = !this.state.isSent && this.state.isTryAgain  ? 'Send your reset link in ' + this.state.tryAgainTimeout : buttonProcessText

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
              { successFeedback }
              <div className="form-group">
                <label className="sr-only">Email address</label>
                <input ref="email" type="email" className="form-control" placeholder="Email" disabled={disabled} />
              </div>
              <div className="space sm"></div>
              <button type="submit" className="btn btn-merij btn-block" disabled={disabled}>{buttonProcessText}</button>
              <div className="space"></div>
              <Link to="/">I remember my password</Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
