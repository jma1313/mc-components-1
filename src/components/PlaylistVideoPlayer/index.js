import React, { PureComponent } from 'react'
import { object } from 'prop-types'
import _ from 'lodash'

import VideoPlayer from '../VideoPlayer'
import PlaylistInitialScreen from '../PlaylistInitialScreen'

export default class PlaylistVideoPlayer extends PureComponent {
  static propTypes = {
    playlist: object,
    tracks: object,
    currentTrack: object,
    currentVideo: object,
  }

  constructor (props) {
    super(props)

    this.state = {
      showInitialScreen: props.currentTrack.position === 1,
      showEndScreen: false,
      nextTrack: null,
    }
  }

  handleEndVideo = () => {
    const { tracks, currentTrack } = this.props
    const tracksSize = Object.keys(tracks).length
    const isLastVideo = tracksSize === currentTrack.position
    if (!isLastVideo) {
      const nextPosition = currentTrack.position
      const nextTrack = _.find(tracks, track => track.position === nextPosition)
      this.setState({ nextTrack, showEndScreen: true })
    }
  }

  renderInitialScreen = ({ onResume }) =>
    <PlaylistInitialScreen
      {...this.props.playlist}
      onResume={onResume}
    />

  render () {
    const { currentVideo } = this.props
    const { showInitialScreen } = this.state

    return (
      <VideoPlayer
        videoId={currentVideo.brightcoveId}
        beforescreenComponent={showInitialScreen && this.renderInitialScreen}
        hasAutoplay={false}
        onEnd={this.handleEndVideo}
      />
    )
  }
}
