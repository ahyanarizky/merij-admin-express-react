import React, { Component } from 'react'
import { Link } from 'react-router'

class Icon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let menu = this.props.menu
    let icon = 'icon fa fa-lg ' + menu.icon
    let name = menu.name
    let link = '/dashboard/' + menu.link
    let linkClass = this.props.activePage.toLowerCase() === menu.link ? 'active' : null

    return (
      <li>
        <Link to={link} className={linkClass} onClick={this.props.forceMenuClose}>
          <i className={icon} aria-hidden="true"></i>
          <span className="text">{name}</span>
        </Link>
      </li>
    )
  }
}

export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [{
        icon: 'fa-star-o',
        name: 'Dashboard',
        link: 'welcome'
      }, {
        icon: 'fa-user-o',
        name: 'Officers',
        link: 'officers'
      }, {
        icon: 'fa-circle-thin',
        name: 'Ads',
        link: 'ads'
      }, {
        icon: 'fa-user-o',
        name: 'Channels',
        link: 'channels'
      }, {
        icon: 'fa-user-o',
        name: 'Users',
        link: 'users'
      }]
    }
  }

  render() {
    let menus = this.state.menus
    let forceMenuClose = this.props.handleForceMenuClose
    if(!forceMenuClose) forceMenuClose = null

    menus = menus.map((menu, i) => {
      return (
        <Icon key={i}
          activePage={this.props.activePage}
          forceMenuClose={forceMenuClose}
          menu={menu} />
      )
    })

    return (
      <ul>{ menus }</ul>
    )
  }
}
