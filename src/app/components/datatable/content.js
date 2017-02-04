import React, { Component } from 'react'
import { Link } from 'react-router'

class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <div className="item-title">
          <Link>
            <div className="status">
              <span className="label label-success">Publish</span>
              <span className="label label-warning">Waiting</span>
              <span className="label label-default">Draft</span>
              <span className="label label-danger">Unpublish</span>
            </div>
            <div className="text">
              <span>{this.props.item.title}</span>
            </div>
          </Link>
        </div>
        <div className="item-sub">
          <div className="item">
            <span className="title">Channel</span>
            <span className="value">merij</span>
          </div>
          <div className="item">
            <span className="title">Views</span>
            <span className="value">1000</span>
          </div>
        </div>
      </li>
    )
  }
}

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tempList: [{
        'title': 'Post title #1',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #2',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #3',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #4',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #5',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #6',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #7',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #8',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #9',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }, {
        'title': 'Post title #10',
        'subitem': [{
          'title': 'Channel',
          'value': 'merij'
        }]
      }]
    }
  }

  render() {
    let list = this.state.tempList.map((item, i) => {
      return <Item key={i} item={item} />
    })

    return (
      <div className="content">
        <ol>{ list }</ol>
      </div>
    )
  }
}
