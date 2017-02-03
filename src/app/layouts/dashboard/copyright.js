import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Copyright extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/dashboard/copyright" className="logo">
        <img src="/assets/image/logo-500x215.png" />
        <span className="subtext">Officer Site</span>
      </Link>
    )
  }
}
