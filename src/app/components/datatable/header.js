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
    let isActive = !this.state.isActive
    this.setState({isActive: isActive})

    if(isActive) this.props.handleFilter(e, 'push', this.props.text)
    else this.props.handleFilter(e, 'pop', this.props.text)
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
      statusList: ['Publish', 'Waiting', 'Draft', 'Unpublish'],
      statusActive: [],
      isHiddenOpen: false
    }
  }

  handleFilter(e, status, text) {
    status = status.toLowerCase()
    let statusActive = this.state.statusActive

    if(status === 'push') {
      statusActive = [...statusActive, text]
    } else if(status === 'pop') {
      statusActive = statusActive.filter((item, i) => {
        return item.toLowerCase() !== text.toLowerCase()
      })
    }

    this.props.handleFilter(statusActive)
    this.setState({statusActive: statusActive})
  }

  handleOpenHidden(e) {
    this.setState({isHiddenOpen: !this.state.isHiddenOpen})
  }

  componentWillMount() {
    this.setState({statusActive: this.state.statusList})
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
              <StatusLabel className="label label-success" text="Publish" handleFilter={this.handleFilter.bind(this)} />
              <StatusLabel className="label label-warning" text="Waiting" handleFilter={this.handleFilter.bind(this)} />
              <StatusLabel className="label label-default" text="Draft" handleFilter={this.handleFilter.bind(this)} />
              <StatusLabel className="label label-danger" text="Unpublish" handleFilter={this.handleFilter.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
