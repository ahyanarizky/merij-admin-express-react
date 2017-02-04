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
    return (
      <div>
        <List />
      </div>
    )
  }
}

App.propTypes = {
  contents: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    contents: state.contents
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
