import React from 'react'
import { string, func } from 'prop-types'

import Button from '../Button'
import './index.scss'

const PlaylistInitialScreen = ({ name, description, onResume }) => (
  <div className='playlist-initial-screen'>
    <h2 className='playlist-initial-screen__name'>
      {name}
    </h2>
    <p className='playlist-initial-screen__description'>
      {description}
    </p>
    <Button onClick={onResume}>START PLAYLIST</Button>
  </div>
)

PlaylistInitialScreen.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  onResume: func.isRequired,
}

export default PlaylistInitialScreen
