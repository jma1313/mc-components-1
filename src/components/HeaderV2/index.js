import React, { PureComponent } from 'react'
import { string, number, arrayOf, shape, bool } from 'prop-types'
import cn from 'classnames'

import NavBarMenuV2 from '../NavBarMenuV2'
import logo from '../../assets/header/only-logo.png'
import defaultAvatar from '../../assets/header/default-avatar@2x.png'

export default class HeaderV2 extends PureComponent {
  static propTypes = {
    name: string.isRequired,
    menuLinks: arrayOf(
      shape({
        label: string.isRequired,
        href: string.isRequired,
      }),
    ),
    avatar: string,
    mobileBreakpoint: number,
    isSolid: bool,
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

  constructor (props) {
    super(props)

    // eslint-disable-next-line
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    const isMobile = width < props.mobileBreakpoint
    this.state = { isMobile, isMenuOpened: false }
  }

  handleToggleMenu = () => {
    debugger;
    const { isMenuOpened } = this.state
    this.setState({ isMenuOpened: !isMenuOpened })
  }

  handleClickOutsideMenu = () => {
    debugger;
    const { isMenuOpened } = this.state
    if (isMenuOpened) {
      this.setState({ isMenuOpened: false })
    }
  }

  render () {
    const {
      isSolid,
      name,
      avatar,
      menuLinks,
    } = this.props
    const { isMenuOpened } = this.state

    const navCn = cn(
      'header-v2__nav',
      { 'header-v2__nav--solid': isSolid },
      { 'header-v2__nav--gradient': !isSolid },
    )

    return (
      <div className='header-v2'>
        <nav className={navCn}>
          <div className='header-v2__wrapper'>
            <a className='header-v2__logo' href='/'>
              <img src={logo} alt='Logo' />
            </a>
            <div className='header-v2__content'>
              <div className='header-v2__left'>
                test
              </div>
              <div className='header-v2__right'>
                <div className='header-v2__nav-item'>
                  <span className='header-v2__nav-item__label'>
                    other link
                  </span>
                </div>
                <div className='header-v2__nav-item'>
                  <div className='header-v2__user' onClick={this.handleToggleMenu}>
                    <img
                      src={avatar || defaultAvatar}
                      className='header-v2__user__avatar'
                    />
                    <span className='header-v2__nav-item__label'>
                      {name}
                    </span>
                    <NavBarMenuV2
                      isOpen={isMenuOpened}
                      onClickOutside={this.handleClickOutsideMenu}
                      menuLinks={menuLinks}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
