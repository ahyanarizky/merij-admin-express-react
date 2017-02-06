import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as AppActions from '../actions'
import List from './list'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list = this.props.list
    let actions = this.props.actions

    return (
      <List
        handleFilter={actions.filterList}
        data={list} />
    )
  }
}

App.propTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
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
