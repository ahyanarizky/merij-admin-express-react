import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  handleSearch(e) {
    e.preventDefault()
    let search = this.refs.search.value
    this.props.handleSearch(search)
  }

  render() {
    return (
      <form className="form">
        <div className="input-group">
          <span className="input-group-addon with-button"
            onClick={this.props.handleClose}>
            <i className="fa fa-close" />
          </span>
          <input ref="search" type="text" value={this.props.value}
            className="form-control input-block input-sm input-default" placeholder="Search"
            onChange={this.handleSearch.bind(this)} />
          <span className="input-group-addon with-button"
            onClick={this.handleSearch.bind(this)}>
            <i className="fa fa-search" />
          </span>
        </div>
      </form>
    )
  }
}
