import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './header'
import Content from './content'
import '../../styles/theme/components/datatable/index.sass'

export default class DataTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let content = this.props.contentData

    return (
      <div className="datatable">
        <Header
          configFilter={this.props.configFilter}
          handleFilter={this.props.handleFilter} />
        <Content data={content} />
      </div>
    )
  }
}
