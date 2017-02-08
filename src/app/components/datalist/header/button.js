import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let buttonClass = `btn btn-xs btn-${this.props.class}`
    let buttonLink = this.props.link || null
    let buttonClick = this.props.onClick
    let iconClass = `icon fa fa-${this.props.icon}`
    let buttonText = this.props.text

    return (
      <Link to={buttonLink} className={buttonClass} onClick={buttonClick}>
        <i className={iconClass} aria-hidden="true"></i>
        <span className="text">{buttonText}</span>
      </Link>
    )
  }
}
