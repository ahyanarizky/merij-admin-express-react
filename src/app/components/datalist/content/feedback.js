import React, { Component } from 'react'

export default class Feedback extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let searchProp = this.props.search
    let isSearch = searchProp.isSearch
    let searchText = null
    let searchValue = searchProp.value
    let itemShown = this.props.itemShown

    if(!isSearch) return null

    if(itemShown >= 1) {
      let resultText = 'result'
      if(itemShown >= 1) resultText += 's'
      searchText = `Search ${resultText} for`
    } else searchText = `Opps.. no result for`

    return (
      <div className="feedback">
        {searchText} <strong>{searchValue}</strong>
      </div>
    )
  }
}
