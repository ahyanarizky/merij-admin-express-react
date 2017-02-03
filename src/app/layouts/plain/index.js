import React, { Component } from 'react'
import '../../styles/theme/layouts/plain/index.sass'

export default class Plain extends Component {
  render() {
    return (
      <section className="lyt-plain">
        <div className="wrapper fullscreen vertical center">
          <div className="wrapper-inner">
            { this.props.children }
          </div>
          <div className="copyright">
            <p>© 2017 Merij. All right reserved</p>
          </div>
        </div>
      </section>
    )
  }
}
