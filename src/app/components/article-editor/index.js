import React, { Component } from 'react'
import ComponentAdd from './add'
import ComponentImage from './image'
import ComponentText from './text'
import ComponentVideo from './video'
import '../../styles/theme/components/article-editor/index.sass'

class ComponentAddWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="component-wrapper">
        <ComponentAdd />
      </div>
    )
  }
}

export default class ArticleEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: [{
        id: '5b0806d17efd4498801e5579da24e63e',
        type: 'video',
        source: null,
        isAdd: true
      }, {
        id: 'e249fddc5c434c2c8bda02f810d7689e',
        type: 'video',
        source: 'https://www.youtube.com/embed/YyOENdBj5kA',
        isAdd: false
      }, {
        id: 'f11c54739004487e9151d1730a9ad220',
        type: 'image',
        source: 'https://source.unsplash.com/random/500x300',
        isAdd: false
      }, {
        id: 'a4b42b78b2d3440c836eefdd393b5259',
        type: 'text',
        isAdd: false
      }]
    }
  }

  handleSave(id, source) {
    let content = this.state.content

    content = content.map((item, i) => {
      if(item.id === id) {
        item.source = source
        item.isAdd = false
      }
      return item
    })

    this.setState({content: content})
  }

  render() {
    let contentComponents = [<ComponentAddWrapper key={0} />]
    let content = this.state.content
    if(content.length > 0) {
      contentComponents = [...contentComponents, content.map((item, i) => {
        let type = item.type.toLowerCase()
        let contentComponent = null
        if(type === 'video') contentComponent = (
          <ComponentVideo from="youtube"
            id={item.id}
            source={item.source}
            isAdd={item.isAdd}
            handleSave={this.handleSave.bind(this)} />
        )
        else if(type === 'image') contentComponent = (
          <ComponentImage
            id={item.id}
            source={item.source}
            isAdd={item.isAdd}
            handleSave={this.handleSave.bind(this)} />
        )
        else if(type === 'text') contentComponent = <ComponentText isAdd={item.isAdd} />

        contentComponent = <div key={(i + 1)} className="component-wrapper">{ contentComponent }</div>
        return contentComponent
      })]
      contentComponents = [...contentComponents, <ComponentAddWrapper key={(contentComponents.length + 1)} />]
    }

    return (
      <div className="article-editor">
        { contentComponents }
      </div>
    )
  }
}
