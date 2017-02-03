import React, { Component } from 'react'
import Header from './header'
import Menu from './menu'
import Copyright from './copyright'
import '../../styles/theme/layouts/dashboard/index.sass'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuClose: false,
      isMenuMobileOpen: false
    }
  }

  handleMenuToggle(e) {
    e.preventDefault()
    this.setState({isMenuClose: !this.state.isMenuClose})
  }

  hanleMenuMobileToggle(e) {
    this.setState({isMenuMobileOpen: !this.state.isMenuMobileOpen})
  }

  render() {
    let activePage = this.props.routes.slice(-1)[0].title
    let menuClass = 'menu-wrapper'
    menuClass += !this.state.isMenuClose ? '' : ' is-close'

    let menuMobileClass = 'menu-wrapper is-mobile'
    menuMobileClass += this.state.isMenuMobileOpen ? ' is-open' : ''

    let contentClass = 'content-wrapper'
    contentClass += !this.state.isMenuClose ? '' : ' is-close'

    return (
      <section className="lyt-dashboard">
        <div className="header-wrapper">
          <Header activePage={activePage}
            handleMenuToggle={this.handleMenuToggle.bind(this)}
            hanleMenuMobileToggle={this.hanleMenuMobileToggle.bind(this)}
            />
        </div>
        <div className={menuClass}>
          <Menu activePage={activePage} />
        </div>
        <div className={menuMobileClass}>
          <Menu activePage={activePage} handleForceMenuClose={this.hanleMenuMobileToggle.bind(this)} />
        </div>
        <div className={contentClass}>
          { this.props.children }
        </div>
        <div className="copyright-wrapper">
          <Copyright />
        </div>
      </section>
    )
  }
}
