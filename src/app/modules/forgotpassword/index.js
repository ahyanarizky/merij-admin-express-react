import React, { Component } from 'react'
import { Link } from 'react-router'
import Alert from '../../components/alert'

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
        successFeedback: {
          'title': 'You\'ve got new mail!',
          'text': 'We sent you an email with instructions on how to reset your password'
        },
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
          errorFeedback: {
            'title': 'Opps..',
            'text': 'Email must be filled'
          },
          errorTypeWarning: true
        })
      } else if(email != 'admin@merij.co') {
        this.setState({
          errorFeedback: {
            'title': 'Oh no!',
            'text': 'Sorry, we couldn\'t find an account with that username'
          },
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
      <Alert className={errorType} title={this.state.errorFeedback.title} text={this.state.errorFeedback.text} />
    )

    let tryAgainDisabled = !this.state.isTryAgain ? null : 'disabled'
    let successFeedback = !this.state.successFeedback ? null : (
      <Alert className="alert alert-info"
        title={(
          <span>{this.state.successFeedback.title} {this.state.sentMailCount > 1 ? '(' + this.state.sentMailCount +')' : null}</span>
        )}
        text={(
          <span>{this.state.successFeedback.text}. If you have not received yet, please click <a onClick={this.handleTryAgain.bind(this)} disabled={tryAgainDisabled}><strong>try again</strong></a></span>
        )} />
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
