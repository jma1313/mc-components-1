import React, { PureComponent } from 'react'
import { arrayOf, shape, bool, string, func } from 'prop-types'
import cn from 'classnames'
import ClickOutside from '../ClickOutside'

export default class NavBarMenuV2 extends PureComponent {
  static propTypes = {
    isOpen: bool.isRequired,
    menuLinks: arrayOf(shape({
      label: string.isRequired,
      href: string.isRequired,
    })).isRequired,
    onClickOutside: func.isRequired,
  }

  menu = React.createRef()

  render () {
    const { isOpen, menuLinks, onClickOutside } = this.props

    const dropDownClassName = cn(
      'navbar-menu-v2',
      { 'navbar-menu-v2--open': isOpen },
    )

    return (
      <ClickOutside
        divRef={this.menu}
        onClickOutside={onClickOutside}
      >
        <ul className={dropDownClassName} ref={this.menu}>
          {menuLinks.map(({ href, label }, index) =>
            <li key={index} className='navbar-menu-v2__item'>
              <a className='navbar-menu-v2__item-link' href={href}>
                {label}
              </a>
            </li>,
          )}
        </ul>
      </ClickOutside>
    )
  }
}
