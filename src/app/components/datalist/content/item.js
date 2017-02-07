import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data = this.props.data
    let statusClass = 'label label-'
    statusClass += data.status.class
    let detail = data.detail.map((item, i) => {
      return (
        <div key={i} className="item">
          <span className="title">{item.title}</span>
          <span className="value">{item.value}</span>
        </div>
      )
    })

    return (
      <li>
        <div className="item-title">
          <Link>
            <div className="status">
              <span className={statusClass}>{data.status.text}</span>
            </div>
            <div className="text">
              <span>{data.title}</span>
            </div>
          </Link>
        </div>
        <div className="item-sub">
          {detail}
        </div>
      </li>
    )
  }
}
