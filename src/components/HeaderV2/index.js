import React, { PureComponent } from 'react'
import { string, arrayOf, shape, bool } from 'prop-types'
import cn from 'classnames'

import NavBarMenuV2 from '../NavBarMenuV2'
import HeaderCourseNameV2 from '../HeaderCourseNameV2'
import logo from '../../assets/header/only-logo.png'
import wordmark from '../../assets/logo-wordmark.svg'

export default class HeaderV2 extends PureComponent {
  static propTypes = {
    menuLinks: arrayOf(
      shape({
        label: string.isRequired,
        href: string.isRequired,
      }),
    ),
    name: string,
    avatar: string,
    isSolid: bool,
    instructorName: string,
    courseName: string,
  }

  static defaultProps = {
    menuLinks: [
      { label: 'Profile', href: '/test' },
      { label: 'Notifications', href: '/notifications' },
      { label: 'The hub', href: '/account/edit' },
      { label: 'Settings', href: '/account/edit' },
      { label: 'Sign out', href: '/sign_out' },
    ],
    mobileBreakpoint: 768,
    isSolid: true,
  }

  state = { isMenuOpened: false }

  handleCloseMenu = () => {
    this.setState({ isMenuOpened: false })
  }

  handleToggleMenu = () => {
    const { isMenuOpened } = this.state
    this.setState({ isMenuOpened: !isMenuOpened })
  }

  render () {
    const {
      isSolid,
      name,
      avatar,
      menuLinks,
      instructorName,
      courseName,
    } = this.props
    const { isMenuOpened } = this.state

    const navCn = cn(
      'header-v2__nav',
      { 'header-v2__nav--solid': isSolid },
      { 'header-v2__nav--gradient': !isSolid },
      { 'header-v2__nav--menu-opened': isMenuOpened },
    )

    return (
      <div className='header-v2'>
        <nav className={navCn}>
          <div className='header-v2__wrapper'>
            <a className='header-v2__logo' href='/'>
              <img src={logo} alt='Logo' />
            </a>
            <a className='header-v2__wordmark' href='/'>
              <img src={wordmark} alt='Logo Wordmark' />
            </a>
            <div className='header-v2__content'>
              <div className='header-v2__left'>
                <HeaderCourseNameV2
                  instructorName={instructorName}
                  courseName={courseName}
                />
              </div>
              <div className='header-v2__right'>
                <NavBarMenuV2
                  menuLinks={menuLinks}
                  name={name}
                  avatar={avatar}
                  isOpen={isMenuOpened}
                  onToggle={this.handleToggleMenu}
                  onClose={this.handleCloseMenu}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
