import React, { Component } from 'react'
import { Link } from 'react-router'

class FilterLabel extends Component {
  constructor(props) {
    super(props)

    this.state = {isActive: true}
  }

  handleActiveToggle(e) {
    e.preventDefault()
    let isActive = !this.state.isActive
    this.setState({isActive: isActive})

    if(isActive) this.props.handleFilter(e, 'push', this.props.title)
    else this.props.handleFilter(e, 'pop', this.props.title)
  }

  render() {
    let className = 'label label-'
    className += this.props.className
    className += this.state.isActive ? '' : ' is-inactive'

    return (
      <Link className={className} onClick={this.handleActiveToggle.bind(this)}>
        {this.props.title}
      </Link>
    )
  }
}

class SortLabel extends Component {
  constructor(props) {
    super(props)

    this.state = {whichActive: null}
  }

  handleActiveToggle(type, e) {
    e.preventDefault()

    let whichActive = this.state.whichActive
    if(whichActive) {
      if(whichActive === type) {
        this.setState({whichActive: null})
        type = null
      } else this.setState({whichActive: type})
    } else this.setState({whichActive: type})

    this.props.handleSort(e, this.props.title, type)
  }

  componentWillMount() {
    this.setState({whichActive: this.props.active ? this.props.active.toLowerCase() : null})
  }

  render() {
    let ascVal = 'ascending', descVal = 'descending'
    let whichActive = this.state.whichActive
    let classNameAsc, classNameDesc
    classNameAsc = classNameDesc = 'label '
    whichActive = whichActive ? whichActive.toLowerCase() : null
    classNameAsc += (whichActive === ascVal) ? 'label-info' : 'is-inactive'
    classNameDesc += (whichActive === descVal) ? 'label-info' : 'is-inactive'

    return (
      <div className="value">
        <Link className={classNameAsc} onClick={this.handleActiveToggle.bind(this, ascVal)}>
          Ascending
        </Link>
        <Link className={classNameDesc} onClick={this.handleActiveToggle.bind(this, descVal)}>
          Descending
        </Link>
      </div>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      statusActive: [],
      sortProperty: [],
      isHiddenOpen: false,
      latestHiddenOpen: null
    }
  }

  handleSearch(e) {
    e.preventDefault()

    let refs = this.refs
    let search = refs.search.value.trim()
    this.props.handleSearch(search)
  }

  handleFilter(e, status, text) {
    status = status.toLowerCase()
    let statusActive = this.state.statusActive

    if(status === 'push') {
      statusActive = [...statusActive, text]
    } else if(status === 'pop') {
      statusActive = statusActive.filter((item, i) => {
        return item.toLowerCase() !== text.toLowerCase()
      })
    }

    this.props.handleFilter(statusActive)
    this.setState({statusActive: statusActive})
  }

  handleSort(e, title, value) {
    let sortProperty = this.state.sortProperty

    sortProperty = sortProperty.map((item, i) => {
      if(item.title.toLowerCase() === title.toLowerCase()) item.value = value ? value.toLowerCase() : null
      return item
    })

    this.props.handleSort(sortProperty)
    this.setState({sortProperty: sortProperty})
  }

  handleOpenHidden(type, e) {
    let isHiddenOpen = this.state.isHiddenOpen
    let latestHiddenOpen = this.state.latestHiddenOpen

    if(!isHiddenOpen) this.setState({isHiddenOpen: !isHiddenOpen, latestHiddenOpen: type})
    else if(latestHiddenOpen === type) this.setState({isHiddenOpen: !isHiddenOpen, latestHiddenOpen: null})
    else this.setState({latestHiddenOpen: type})
  }

  componentWillMount() {
    let configFilter = this.props.configFilter
    let handleFilter = this.props.handleFilter

    if(configFilter && handleFilter) {
      let filterStatus = configFilter.status.data
      filterStatus = filterStatus.map((item, i) => {
        return item.title
      })
      this.setState({statusActive: filterStatus})
    }

    let configSort = this.props.configSort
    let handleSort = this.props.handleSort
    if(configSort && handleSort) {
      this.setState({sortProperty: configSort})
    }
  }

  render() {
    let hiddenClass = 'hidden-wrapper'
    hiddenClass += (this.state.isHiddenOpen && this.state.latestHiddenOpen) ? ' is-open' : ''

    // Sort feature property
    let configSearch = this.props.configSearch
    let handleSearch = this.props.handleSearch

    let searchButton, searchWrapper = null
    if((configSearch && handleSearch) || true) {
      searchButton = (
        <Link className="btn btn-xs btn-primary" onClick={this.handleOpenHidden.bind(this, 'search')}>
          <i className="icon fa fa-search" aria-hidden="true"></i>
          <span className="text">Search</span>
        </Link>
      )

      searchWrapper = (
        <form className="form">
          <div className="input-group">
            <span className="input-group-addon with-button" onClick={this.handleOpenHidden.bind(this, null)}><i className="fa fa-close"></i></span>
            <input ref="search" type="text" value={configSearch.value}
              className="form-control input-block input-sm input-default" placeholder="Search"
              onChange={this.handleSearch.bind(this)} />
            <span className="input-group-addon with-button"><i className="fa fa-search"></i></span>
          </div>
        </form>
      )
    }

    // Filter feature property
    let configFilter = this.props.configFilter
    let handleFilter = this.props.handleFilter

    let filterButton, filterWrapper = null
    if(configFilter && handleFilter) {
      let filterStatus = configFilter.status
      let filterStatusValue = filterStatus.data.map((item, i) => {
        return <FilterLabel key={i} title={item.title} className={item.class} handleFilter={this.handleFilter.bind(this)} />
      })

      filterButton = (
        <Link className="btn btn-xs btn-info" onClick={this.handleOpenHidden.bind(this, 'filter')}>
          <i className="icon fa fa-filter" aria-hidden="true"></i>
          <span className="text">Filter</span>
        </Link>
      )

      filterWrapper = (
        <div className="item">
          <div className="title">
            <span>{filterStatus.title}</span>
          </div>
          <div className="value">
            {filterStatusValue}
          </div>
        </div>
      )
    }

    // Sort feature property
    let configSort = this.props.configSort
    let handleSort = this.props.handleSort

    let sortButton, sortWrapper = null
    if(configSort && handleSort) {
      sortButton = (
        <Link className="btn btn-xs btn-info" onClick={this.handleOpenHidden.bind(this, 'sort')}>
          <i className="icon fa fa-sort" aria-hidden="true"></i>
          <span className="text">Sort</span>
        </Link>
      )

      sortWrapper = configSort.map((item, i) => {
        return (
          <div key={i} className="item">
            <div className="title"><span>{item.title}</span></div>
            <SortLabel title={item.title} active={item.value} handleSort={this.handleSort.bind(this)} />
          </div>
        )
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
        <div className={hiddenClass}>
          {hiddenWrapper}
        </div>
      </div>
    )

    return (
      <div className="header">
        { headerWrapper }
      </div>
    )
  }
}
