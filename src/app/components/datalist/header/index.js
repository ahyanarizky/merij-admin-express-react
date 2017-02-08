import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from './button'
import Search from './search'
import Filter from './filter'
import Sort from './sort'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHiddenOpen: false,
      latestHiddenOpen: null
    }
  }

  handleOpenHidden(type, e) {
    let isHiddenOpen = this.state.isHiddenOpen
    let latestHiddenOpen = this.state.latestHiddenOpen

    if(!isHiddenOpen) this.setState({isHiddenOpen: !isHiddenOpen, latestHiddenOpen: type})
    else if(latestHiddenOpen === type) this.setState({isHiddenOpen: !isHiddenOpen, latestHiddenOpen: null})
    else this.setState({latestHiddenOpen: type})
  }

  render() {
    let hiddenClass = 'hidden-wrapper'
    hiddenClass += (this.state.isHiddenOpen && this.state.latestHiddenOpen) ? ' is-open' : ''

    // Sort feature property
    let configSearch = this.props.configSearch
    let handleSearch = this.props.handleSearch

    let searchButton, searchWrapper = null
    if(configSearch && handleSearch) {
      searchButton = <Button class="primary" onClick={this.handleOpenHidden.bind(this, 'search')} icon="search" text="Search" />
      searchWrapper = <Search value={configSearch.value} handleSearch={this.props.handleSearch} handleClose={this.handleOpenHidden.bind(this, null)} />
    }

    // Filter feature property
    let configFilter = this.props.configFilter
    let handleFilter = this.props.handleFilter

    let filterButton, filterWrapper = null
    if(configFilter && handleFilter) {
      filterButton = <Button class="info" onClick={this.handleOpenHidden.bind(this, 'filter')} icon="filter" text="Filter" />
      filterWrapper = configFilter.map((item, i) => {
        return <Filter key={i} title={item.title} value={item.value} handleFilter={handleFilter} />
      })
    }

    // Sort feature property
    let configSort = this.props.configSort
    let handleSort = this.props.handleSort

    let sortButton, sortWrapper = null
    if(configSort && handleSort) {
      sortButton = <Button class="info" onClick={this.handleOpenHidden.bind(this, 'sort')} icon="sort" text="Sort" />
      sortWrapper = configSort.map((item, i) => {
        return <Sort key={i} title={item.title} active={item.value} handleSort={handleSort} />
      })
    }

    // Hidden wrapper property
    let hiddenWrapper = null
    if(this.state.latestHiddenOpen === 'filter') hiddenWrapper = filterWrapper
    else if(this.state.latestHiddenOpen === 'sort') hiddenWrapper = sortWrapper

    // Header wrapper property
    let headerWrapper = null
    if(this.state.latestHiddenOpen === 'search') headerWrapper = searchWrapper
    else headerWrapper = (
      <div>
        {searchButton}
        {filterButton}
        {sortButton}
        <Link className="btn btn-xs btn-success">
          <i className="icon fa fa-plus" aria-hidden="true"></i>
          <span className="text">Add New</span>
        </Link>
        <div className={hiddenClass}>{ hiddenWrapper }</div>
      </div>
    )

    return (
      <div className="header">{ headerWrapper }</div>
    )
  }
}
