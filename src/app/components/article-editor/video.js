import React, { Component } from 'react'
import Alert from '../alert'

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feedback: null,
      isExpand: false
    }
  }

  checkURL(url) {
    let test = /((http|https):\/\/)?(www\.)?(youtube\.com)(\/)?([a-zA-Z0-9\-\.]+)\/?/.test(url)
    if(!test) this.setState({feedback: 'Please insert youtube URL'})
    return test
  }

  handleExpand(e) {
    e.preventDefault()
    this.setState({isExpand: true})
  }

  handleSave(e) {
    e.preventDefault()
    let source = this.refs.source.value.trim()

    if(this.checkURL(source)) {
      this.setState({feedback: null})
      this.props.handleSave(this.props.id, source)
    }
  }

  render() {
    let video = null
    let source = this.props.source
    let sourceFrom = this.props.from
    let feedback = this.state.feedback
    let isAdd = this.props.isAdd
    let isExpand = this.state.isExpand
    let feedbackWrapper = null
    let videoWrapper = null

    source = source ? source.replace('watch?v=', 'embed/') : ''

    if(!isAdd) {
      if(sourceFrom === 'youtube') video = <iframe src={source} frameBorder="0" allowFullScreen />
    }

    if(!isAdd) {
      let wrapperClass = 'component-layer'
      wrapperClass += isExpand ? ' is-expand' : ''

      videoWrapper = (
        <div className={wrapperClass}>
          <div className="component-layer-text"><a onClick={this.handleExpand.bind(this)}>View</a></div>
          <div className="component-layer-viewer">{ video }</div>
        </div>
      )
    }

    if(feedback) feedbackWrapper = <Alert className="alert alert-danger" title="Opps.." text={feedback} />

    return (
      <div className="component-video">
        { videoWrapper }
        { feedbackWrapper }
        <form className="form" onSubmit={this.handleSave.bind(this)}>
          <div className="input-group">
            <span className="input-group-addon">Youtube</span>
            <input ref="source" type="text" placeholder="Please input your video URL"
              className="form-control input-block input-sm input-default" defaultValue={source} />
            <span className="input-group-btn">
              <button className="btn btn-sm btn-success" type="button"
                onClick={this.handleSave.bind(this)}>Save</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
