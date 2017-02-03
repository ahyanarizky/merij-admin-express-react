import React, { Component } from 'react'
import { Link } from 'react-router'
import Breadcrumb from '../../components/breadcrumb'
import List from './list'

export default class Posts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Breadcrumb />
        <List />
      </div>
    )
  }
}
