import React, { PureComponent } from 'react'
import { string, number, func, bool } from 'prop-types'

import Timer from '../Timer'
import './index.scss'

export default class PlaylistEndScreen extends PureComponent {
  static propTypes = {
    playlistName: string.isRequired,
    position: number.isRequired,
    description: string.isRequired,
    id: number.isRequired,
    onChangeTrack: func.isRequired,
    showTimer: bool.isRequired,
  }

  handleChangeTrack = () => {
    const { onChangeTrack, id } = this.props
    onChangeTrack(id)
  }

  parsePosition = (position) => {
    if (position < 10) {
      return `0${position}`
    }
    return position
  }

  render () {
    const {
      playlistName,
      position,
      description,
      showTimer,
    } = this.props

    return (
      <div className='playlist-end-screen'>
        <p className='playlist-end-screen__playlist-name'>
          {playlistName}
        </p>
        <h2 className='playlist-end-screen__name'>
          {`LESSON ${this.parsePosition(position)}`}
        </h2>
        <p className='playlist-end-screen__description'>
          {description}
        </p>
        {showTimer &&
          <Timer time={6} onFinish={this.handleChangeTrack} />
        }
      </div>
    )
  }
}
