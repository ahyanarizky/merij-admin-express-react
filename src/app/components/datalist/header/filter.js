import React, { Component } from 'react'
import { Link } from 'react-router'

class FilterLabel extends Component {
  constructor(props) {
    super(props)
  }

  handleActiveToggle(e) {
    e.preventDefault()
    let isActive = !this.props.item.active

    this.props.handleFilter(this.props.title, this.props.item.title, isActive)
  }

  render() {
    let className = 'label label-'
    className += this.props.item.class
    className += this.props.item.active ? '' : ' is-inactive'

    return (
      <Link className={className} onClick={this.handleActiveToggle.bind(this)}>
        {this.props.item.title}
      </Link>
    )
  }
}

export default class Filter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let title = this.props.title
    let value = this.props.value
    let handleFilter = this.props.handleFilter

    value = value.map((item, i) => {
      return <FilterLabel key={i} title={title} item={{title: item.title, class: item.class, active: item.active}} handleFilter={handleFilter} />
    })

    return (
      <div className="item">
        <div className="title"><span>{ title }</span></div>
        <div className="value">{ value }</div>
      </div>
    )
  }
}
