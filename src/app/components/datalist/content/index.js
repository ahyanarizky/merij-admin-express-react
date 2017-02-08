import React, { Component } from 'react'
import Feedback from './feedback'
import Item from './item'

export default class Content extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let searchProp = this.props.search
    let itemShown = 0
    let list = this.props.data.map((item, i) => {
      if(searchProp.isSearch) {
        if(item.isShown && item.isFound) {
          itemShown += 1
          return <Item key={i} data={item} />
        }
      } else if(item.isShown) {
        itemShown += 1
        return <Item key={i} data={item} />
      }
    })

    return (
      <div className="content">
        <Feedback search={searchProp} itemShown={itemShown} />
        <ol>{ list }</ol>
      </div>
    )
  }
}
