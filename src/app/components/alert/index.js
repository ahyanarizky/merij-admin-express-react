import React, { Component } from 'react'

export default class Alert extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let className = this.props.className
    let title = !this.props.title ? null : (
      <p><strong>{this.props.title}</strong></p>
    )
    let text = !this.props.text ? null : (
      <p>{this.props.text}</p>
    )

    return (
      <div className={className} role="alert">
        { title }
        { text }
      </div>
    )
  }
}
