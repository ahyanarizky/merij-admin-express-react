import React, { Component } from 'react'
import { Link } from 'react-router'

class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let title = this.props.title
    let path = this.props.path
    let itemClass = this.props.isActive ? 'active' : ''
    let link = null

    if(path) link = <Link to={path}><span>{ title }</span></Link>
    else link = <span>{ title }</span>

    return (
      <li className={itemClass}>
        { link }
      </li>
    )
  }
}

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list = this.props.list
    list = [{
      'title': null,
      'path': null
    }, ...list]

    list = list.map((item, i) => {
      let isActive = (i === list.length - 1) ? true : false
      return <Item key={i} path={item.path} title={item.title} isActive={isActive} />
    })

    return (
      <ol className="breadcrumb">{ list }</ol>
    )
  }
}
