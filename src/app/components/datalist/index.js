import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './header'
import Content from './content'
import '../../styles/theme/components/datalist/index.sass'

export default class DataTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      add: {
        path: null
      }, search: {
        isSearch: false,
        value: ''
      },
      filter: {value: []},
      sort: {value: []}
    }
  }

  handleSearch(value) {
    if(value) this.setState({search: {isSearch: true, value: value}})
    else this.setState({search: {isSearch: false, value: ''}})
    this.props.handleSearch(value)
  }

  handleFilter(title, valueTitle, valueActive) {
    let filter = this.state.filter.value

    filter = filter.map((item, i) => {
      if(item.title.toLowerCase() === title.toLowerCase()) {
        item.value = item.value.map((value, x) => {
          if(value.title.toLowerCase() === valueTitle.toLowerCase()) value.active = valueActive
          return value
        })
      }
      return item
    })

    this.props.handleFilter(filter)
    this.setState({filter: {value: filter}})
  }

  handleSort(title, value) {
    let sort = this.state.sort.value

    sort = sort.map((item, i) => {
      if(item.title.toLowerCase() === title.toLowerCase()) item.value = value ? value.toLowerCase() : null
      return item
    })

    this.props.handleSort(sort)
    this.setState({sort: {value: sort}})
  }

  componentWillMount() {
    let configAdd = this.props.configAdd

    if(configAdd) this.setState({add: {path: configAdd}})

    let configFilter = this.props.configFilter
    let handleFilter = this.props.handleFilter

    if(configFilter && handleFilter) {
      this.setState({filter: {value: configFilter}})
    }

    let configSort = this.props.configSort
    let handleSort = this.props.handleSort
    if(configSort && handleSort) {
      this.setState({sort: {value: configSort}})
    }
  }

  render() {
    let content = this.props.contentData

    return (
      <div className="datalist">
        <Header
          configAdd={this.state.add}
          configSearch={{value: this.state.search.value}}
          handleSearch={this.handleSearch.bind(this)}
          configFilter={this.state.filter.value}
          handleFilter={this.handleFilter.bind(this)}
          configSort={this.state.sort.value}
          handleSort={this.handleSort.bind(this)} />
        <Content search={this.state.search} data={content} />
      </div>
    )
  }
}
