import React, { Component } from 'react'
import DraftjsEditor from '../draftjs-editor'

export default class Text extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="component-text">
        <DraftjsEditor />
      </div>
    )
  }
}
