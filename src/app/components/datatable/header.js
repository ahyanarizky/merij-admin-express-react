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

    if(isActive) this.props.handleFilter(e, 'push', this.props.title)
    else this.props.handleFilter(e, 'pop', this.props.title)
  }

  render() {
    let className = 'label label-'
    className += this.props.className
    className += this.state.isActive ? '' : ' is-inactive'

    return (
      <Link className={className} onClick={this.handleActiveToggle.bind(this)}>
        {this.props.title}
      </Link>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    let filterStatus = this.props.configFilter.status.data
    filterStatus = filterStatus.map((item, i) => {
      return item.title
    })
    this.setState({statusActive: filterStatus})
  }

  render() {
    let configFilter = this.props.configFilter
    let filterStatus = configFilter.status
    let hiddenClass = 'hidden-wrapper'
    hiddenClass += this.state.isHiddenOpen ? ' is-open' : ''

    let filterStatusValue = filterStatus.data.map((item, i) => {
      return <StatusLabel key={i} title={item.title} className={item.class} handleFilter={this.handleFilter.bind(this)} />
    })

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
              <span>{filterStatus.title}</span>
            </div>
            <div className="value">
              {filterStatusValue}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
