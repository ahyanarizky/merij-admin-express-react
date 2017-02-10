import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let icon = this.props.icon
    if(icon) {
      let iconClass = "icon fa fa-"
      iconClass += icon
      icon = <i className={iconClass} aria-hidden="true"></i>
    }
    let text = this.props.text

    return (
      <a>{ icon }{ text }</a>
    )
  }
}

export default class Add extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="component-add">
        <div className="title">
          Add new
        </div>
        <div className="action">
          <Button icon="font" text="Text" />
          <Button icon="picture-o" text="Image" />
          <Button icon="youtube" text="Youtube" />
        </div>
      </div>
    )
  }
}
