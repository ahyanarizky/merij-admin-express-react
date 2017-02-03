import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleMenuToggle(e) {
    this.props.handleMenuToggle(e)
  }

  hanleMenuMobileToggle(e) {
    this.props.hanleMenuMobileToggle(e)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-item text-left">
          <Link className="button text" onClick={this.handleMenuToggle.bind(this)}>
            <i className="fa fa-bars icon-left" aria-hidden="true"></i>Menu
          </Link>
          <Link className="button text is-mobile" onClick={this.hanleMenuMobileToggle.bind(this)}>
            <i className="fa fa-bars icon-left" aria-hidden="true"></i>Menu
          </Link>
        </div>
        <div className="wrapper-item text-center">
          <h5 className="title"><strong>{this.props.activePage}</strong></h5>
        </div>
        <div className="wrapper-item text-right">
          <Link to="/dashboard/profile" className="profile">
            <img src="https://api.adorable.io/avatars/285/gree" />
          </Link>
          <Link to="/" className="button circle">
            <i className="fa fa-power-off" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    )
  }
}
