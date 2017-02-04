import React, { Component } from 'react'
import { Link } from 'react-router'

class StatusLabel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: true
    }
  }

  handleActiveToggle(e) {
    e.preventDefault()

    this.setState({isActive: !this.state.isActive})
  }

  render() {
    let className = this.props.className
    className += this.state.isActive ? '' : ' is-inactive'

    return (
      <Link className={className} onClick={this.handleActiveToggle.bind(this)}>
        {this.props.text}
      </Link>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHiddenOpen: false
    }
  }

  handleOpenHidden(e) {
    this.setState({isHiddenOpen: !this.state.isHiddenOpen})
  }

  render() {
    let hiddenClass = 'hidden-wrapper'
    hiddenClass += this.state.isHiddenOpen ? ' is-open' : ''

    return (
      <div className="header">
        <Link className="btn btn-xs btn-info" onClick={this.handleOpenHidden.bind(this)}>
          <i className="icon fa fa-filter" aria-hidden="true"></i>
          <span className="text">Filter</span>
        </Link>
        <Link className="btn btn-xs btn-success">
          <i className="icon fa fa-plus" aria-hidden="true"></i>
          <span className="text">Add New</span>
        </Link>
        <div className={hiddenClass}>
          <div className="item">
            <div className="title">
              <span>status</span>
            </div>
            <div className="value">
              <StatusLabel className="label label-success" text="Publish" />
              <StatusLabel className="label label-warning" text="Waiting" />
              <StatusLabel className="label label-default" text="Draft" />
              <StatusLabel className="label label-danger" text="Unpublish" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
