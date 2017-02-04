import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <Link className="btn btn-sm btn-success">
          <i className="icon fa fa-plus" aria-hidden="true"></i>
          <span className="text">Add New</span>
        </Link>
      </div>
    )
  }
}
