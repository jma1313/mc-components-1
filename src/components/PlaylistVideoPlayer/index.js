import React, { PureComponent } from 'react'
import { object } from 'prop-types'

import VideoPlayer from '../VideoPlayer'
import PlaylistInitialScreen from '../PlaylistInitialScreen'

export default class PlaylistVideoPlayer extends PureComponent {
  static propTypes = {
    playlist: object,
    currentTrack: object,
  }

  constructor (props) {
    super(props)

    this.state = {
      showInitialScreen: props.currentTrack.position === 1,
    }
  }

  renderInitialScreen = ({ onResume }) =>
    <PlaylistInitialScreen
      {...this.props.playlist}
      onResume={onResume}
    />

  render () {
    const { currentTrack } = this.props
    const { showInitialScreen } = this.state

    return (
      <VideoPlayer
        videoId={currentTrack.video.id}
        beforescreenComponent={showInitialScreen && this.renderInitialScreen}
        hasAutoplay={false}
      />
    )
  }
}
