import React, { Component } from 'react'
import Alert from '../alert'

export default class ComponentImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feedback: null,
      isExpand: false
    }
  }

  checkURL(e, url) {
    return new Promise(function (resolve, reject) {
      let timeout = 5000
      let timer, img = new Image()
      img.onerror = img.onabort = () => {
        clearTimeout(timer)
        e.setState({feedback: 'URL isn\'t contain image'})
      }
      img.onload = () => {
        clearTimeout(timer)
        e.setState({feedback: null})
        e.props.handleSave(e.props.id, url)
      }
      timer = setTimeout(() => {
        // reset .src to invalid URL so it stops previous
        // loading, but doesn't trigger new load
        img.src = '//!!!!/test.jpg'
        e.setState({feedback: 'System cannot get your image URL'})
      }, timeout)
      img.src = url
    })
  }

  handleExpand(e) {
    e.preventDefault()
    this.setState({isExpand: true})
  }

  handleSave(e) {
    e.preventDefault()
    let source = this.refs.source.value.trim()

    this.checkURL(this, source)
    return true
  }

  render() {
    let image = null
    let source = this.props.source
    let feedback = this.state.feedback
    let isAdd = this.props.isAdd
    let isExpand = this.state.isExpand
    let feedbackWrapper = null
    let imageWrapper = null

    if(!isAdd) {
      if(source) image = <img src={source} />
      let wrapperClass = 'component-layer'
      wrapperClass += isExpand ? ' is-expand' : ''

      imageWrapper = (
        <div className={wrapperClass}>
          <div className="component-layer-text"><a onClick={this.handleExpand.bind(this)}>View</a></div>
          <div className="component-layer-viewer">{ image }</div>
        </div>
      )
    }

    if(feedback) feedbackWrapper = <Alert className="alert alert-danger" title="Opps.." text={feedback} />

    return (
      <div className="component-image">
        { imageWrapper }
        { feedbackWrapper }
        <form className="form" onSubmit={this.handleSave.bind(this)}>
          <div className="input-group">
            <span className="input-group-addon">Image</span>
            <input ref="source" type="text" placeholder="Please input your image URL"
              className="form-control input-block input-sm input-default" defaultValue={source} />
            <span className="input-group-btn">
              <button className="btn btn-sm btn-success" type="button"
                onClick={this.handleSave.bind(this)}>Save</button>
              <button className="btn btn-sm btn-info" type="button"
                onClick={this.handleSave.bind(this)}>Upload from your PC</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
