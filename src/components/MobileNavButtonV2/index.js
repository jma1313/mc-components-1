import React from 'react'
import { bool, func } from 'prop-types'
import cn from 'classnames'

import navButton from '../../assets/header/hamburguer-icon.svg'

const MobileNavButtonV2 = ({ isOpen, onClick }) => {
  const classNames = cn(
    'mobile-nav-button-v2',
    { 'mobile-nav-button-v2--opened': isOpen },
  )

  return (
    <div onClick={onClick} className={classNames}>
      {isOpen ?
        <p className='mobile-nav-button-v2__close'>CLOSE</p> :
        <img src={navButton} />
      }
    </div>
  )
}

MobileNavButtonV2.propTypes = {
  isOpen: bool.isRequired,
  onClick: func.isRequired,
}

export default MobileNavButtonV2
