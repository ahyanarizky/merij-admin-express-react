import React, { Component } from 'react'
import ArticleEditor from '../../../../components/article-editor'

export default class Add extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content with-max-width">
        <ArticleEditor />
      </div>
    )
  }
}
