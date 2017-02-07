import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './header'
import Content from './content'
import '../../styles/theme/components/datalist/index.sass'

export default class DataTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSearch: false,
      searchValue: ''
    }
  }

  handleSearch(value) {
    if(value) this.setState({isSearch: true, searchValue: value})
    else this.setState({isSearch: false, searchValue: ''})
    this.props.handleSearch(value)
  }

  render() {
    let content = this.props.contentData

    return (
      <div className="datatable">
        <Header
          configSearch={{value: this.state.searchValue}}
          handleSearch={this.handleSearch.bind(this)}
          configFilter={this.props.configFilter}
          handleFilter={this.props.handleFilter}
          configSort={this.props.configSort}
          handleSort={this.props.handleSort} />
        <Content isSearch={this.state.isSearch} searchValue={this.state.searchValue} data={content} />
      </div>
    )
  }
}
