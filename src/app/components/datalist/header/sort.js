import React, { Component } from 'react'
import { Link } from 'react-router'

class SortLabel extends Component {
  constructor(props) {
    super(props)

    this.state = {whichActive: null}
  }

  handleActiveToggle(type, e) {
    e.preventDefault()

    let whichActive = this.state.whichActive
    if(whichActive) {
      if(whichActive === type) {
        this.setState({whichActive: null})
        type = null
      } else this.setState({whichActive: type})
    } else this.setState({whichActive: type})

    this.props.handleSort(this.props.title, type)
  }

  componentWillMount() {
    this.setState({whichActive: this.props.active ? this.props.active.toLowerCase() : null})
  }

  render() {
    let ascVal = 'ascending', descVal = 'descending'
    let whichActive = this.state.whichActive
    let classNameAsc, classNameDesc
    classNameAsc = classNameDesc = 'label '
    whichActive = whichActive ? whichActive.toLowerCase() : null
    classNameAsc += (whichActive === ascVal) ? 'label-info' : 'is-inactive'
    classNameDesc += (whichActive === descVal) ? 'label-info' : 'is-inactive'

    return (
      <div className="value">
        <Link className={classNameAsc} onClick={this.handleActiveToggle.bind(this, ascVal)}>
          Ascending
        </Link>
        <Link className={classNameDesc} onClick={this.handleActiveToggle.bind(this, descVal)}>
          Descending
        </Link>
      </div>
    )
  }
}

export default class Sort extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let title = this.props.title
    let value = this.props.value
    let handleSort = this.props.handleSort

    return (
      <div className="item">
        <div className="title"><span>{title}</span></div>
        <SortLabel title={title} active={value} handleSort={handleSort} />
      </div>
    )
  }
}
