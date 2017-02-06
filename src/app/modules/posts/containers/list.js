import React, { Component } from 'react'
import { Link } from 'react-router'
import Breadcrumb from '../../../components/breadcrumb'
import DataList from '../../../components/datalist'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list = this.props.data

    return (
      <div>
        <Breadcrumb />
        <DataList
          configSort={this.props.configSort}
          handleSort={this.props.handleSort}
          configFilter={this.props.configFilter}
          handleFilter={this.props.handleFilter}
          contentData={list} />
      </div>
    )
  }
}
