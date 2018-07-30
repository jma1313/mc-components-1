import React, { PureComponent } from 'react'
import { arrayOf, shape, string, bool, func } from 'prop-types'
import cn from 'classnames'

import ClickOutside from '../ClickOutside'
import MobileNavButtonV2 from '../MobileNavButtonV2'
import defaultAvatar from '../../assets/header/default-avatar@2x.png'

export default class NavBarMenuV2 extends PureComponent {
  static propTypes = {
    menuLinks: arrayOf(shape({
      label: string.isRequired,
      href: string.isRequired,
    })).isRequired,
    isOpen: bool.isRequired,
    onToggle: func.isRequired,
    onClose: func.isRequired,
    name: string,
    avatar: string,
  }

  container = React.createRef()

  render () {
    const {
      menuLinks,
      name,
      avatar,
      isOpen,
      onToggle,
      onClose,
    } = this.props

    const dropDownClassName = cn(
      'navbar-menu-v2',
      { 'navbar-menu-v2--open': isOpen },
    )
    const navItemClassName = cn(
      'header-v2__nav-item',
      { 'header-v2__nav-item--active': isOpen },
    )

    return (
      <ClickOutside
        divRef={this.container}
        onClickOutside={onClose}
      >
        <div
          className={navItemClassName}
          ref={this.container}
          onClick={onToggle}
        >
          <MobileNavButtonV2
            isOpen={isOpen}
            onClick={onToggle}
          />
          <div className='header-v2__user'>
            <img
              src={avatar || defaultAvatar}
              className='header-v2__user__avatar'
            />
            <span className='header-v2__nav-item__label'>
              {name}
            </span>
            <ul className={dropDownClassName}>
              {menuLinks.map(({ href, label }, index) =>
                <li key={index} className='navbar-menu-v2__item'>
                  <a className='navbar-menu-v2__item-link' href={href}>
                    {label}
                  </a>
                </li>,
              )}
            </ul>
          </div>
        </div>
      </ClickOutside>
    )
  }
}
