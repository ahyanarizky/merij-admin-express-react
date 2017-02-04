import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Container from './containers'
const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
