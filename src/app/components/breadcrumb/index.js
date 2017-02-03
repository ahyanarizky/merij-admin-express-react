import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ol className="breadcrumb">
        <li><a href="#"></a></li>
        <li className="active"><span>List</span></li>
      </ol>
    )
  }
}
