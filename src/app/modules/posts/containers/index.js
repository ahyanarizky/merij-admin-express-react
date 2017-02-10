import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as AppActions from '../actions'
import Breadcrumb from '../../../components/breadcrumb'
import List from './list'
import Add from './add'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let status = this.props.status
    let breadcrumbList = []
    let content = null

    if(status === 'L') {
      let config = this.props.config
      let list = this.props.list
      let actions = this.props.actions

      breadcrumbList = [{
        'title': 'List',
        'path': null
      }]

      content = (
        <List
          handleSearch={actions.searchList}
          configFilter={config.filter}
          handleFilter={actions.filterList}
          configSort={config.sort}
          handleSort={actions.sortList}
          data={list} />
      )
    } else if(status === 'A') {
      breadcrumbList = [{
        'title': 'List',
        'path': '/dashboard/posts'
      }, {
        'title': 'Add Post',
        'path': null
      }]

      content = <Add />
    }

    return (
      <div>
        <Breadcrumb list={breadcrumbList} />
        { content }
      </div>
    )
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    config: state.config,
    list: state.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
