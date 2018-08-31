import React, { PureComponent } from 'react'
import { object } from 'prop-types'
import _ from 'lodash'

import VideoPlayer from '../VideoPlayer'
import PlaylistInitialScreen from '../PlaylistInitialScreen'
import PlaylistEndScreen from '../PlaylistEndScreen'

export default class PlaylistVideoPlayer extends PureComponent {
  static propTypes = {
    playlist: object,
    tracks: object,
    currentTrack: object,
    currentVideo: object,
  }

  constructor (props) {
    super(props)

    const isLastVideo = this.isLastVideo()

    this.state = {
      isLastVideo,
      showInitialScreen: props.currentTrack.position === 1,
      nextTrack: !isLastVideo ? this.getNextTrack() : null,
    }
  }

  handleChangeTrack = (trackId) => {
    console.log(`change track: ${trackId}`)
  }

  isLastVideo = () => {
    const { tracks, currentTrack } = this.props
    const tracksSize = Object.keys(tracks).length
    return tracksSize === currentTrack.position
  }

  getNextTrack = () => {
    const { tracks, currentTrack } = this.props
    const nextPosition = currentTrack.position + 1
    const nextTrack = _.find(tracks, track =>
      track.attributes.position === nextPosition).attributes
    return nextTrack
  }

  renderInitialScreen = ({ onResume }) =>
    <PlaylistInitialScreen
      {...this.props.playlist}
      onResume={onResume}
    />

  renderEndScreen = ({ isActive }) => {
    const { isLastVideo, nextTrack } = this.state

    if (!isLastVideo) {
      return (
        <PlaylistEndScreen
          {...nextTrack}
          playlistName={this.props.playlist.name}
          onChangeTrack={this.handleChangeTrack}
          showTimer={isActive}
        />
      )
    }
    return null // return Rate Playlist component
  }

  render () {
    const { currentVideo } = this.props
    const { showInitialScreen } = this.state

    return (
      <VideoPlayer
        videoId={currentVideo.brightcoveId}
        beforescreenComponent={
          showInitialScreen ? this.renderInitialScreen : null
        }
        endscreenComponent={this.renderEndScreen}
        hasAutoplay={false}
        onEnd={this.handleVideoEnd}
      />
    )
  }
}
