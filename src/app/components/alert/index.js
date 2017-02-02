import React, { Component } from 'react'

export default class Alert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }
  }

  handleDismiss(e) {
    this.setState({isOpen: false})
  }

  componentWillReceiveProps() {
    this.setState({isOpen: true})
  }

  render() {
    if(this.state.isOpen) {
      let className = this.props.className
      let title = !this.props.title ? null : (
        <p><strong>{this.props.title}</strong></p>
      )
      let text = !this.props.text ? null : (
        <p>{this.props.text}</p>
      )
      let dismiss = this.props.dismiss === false ? null : (
        <a className="close" data-dismiss="alert" aria-label="close" onClick={this.handleDismiss.bind(this)}>&times;</a>
      )
      if(dismiss) className += ' alert-dismissable'

      return (
        <div className={className} role="alert">
          { dismiss }
          { title }
          { text }
        </div>
      )
    } else return null
  }
}
