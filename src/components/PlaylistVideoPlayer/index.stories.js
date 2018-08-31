import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import PlaylistVideoPlayer from '../PlaylistVideoPlayer'

const playlist = {
  id: 1,
  name: 'Are you taking risks',
  description: 'While fear of failure is natural, risking failure is the price of greatness. How do you determine whether a risk is worth taking?  Learn how to think about and evaluate risk, how risk-taking can enhance your success, what can happen when you risk everything to be true to yourself, and when you risk and fail.',
}

const tracks = {
  1: {
    attributes: {
      id: 1,
      name: 'Risks',
      description: 'Composer Hans Zimmer sees risk as a necessary requirement for entertainers who wish to excite their audiences.',
      position: 1,
    },
    relationships: {
      video: {
        data: { type: 'video', id: 200 },
      },
    },
  },
  2: {
    attributes: {
      id: 2,
      name: 'Be Brave and True',
      description: 'Write what needs to be there. get it all down. You have to be honest.',
      position: 2,
    },
    relationships: {
      video: {
        data: { type: 'video', id: 240 },
      },
    },
  },
}

const currentTrack = { id: 1, isPlaying: false }

const videos = {
  200: {
    attributes: {
      id: 200,
      brightcoveId: '5450137526001',
    },
  },
  240: {
    attributes: {
      id: 240,
      brightcoveId: '5707329402001',
    },
  },
}

// selectors
const getCurrentTrack = () => tracks[currentTrack.id].attributes

const getCurrentVideo = () => {
  const track = tracks[currentTrack.id]
  const videoId = track.relationships.video.data.id
  return videos[videoId].attributes
}

storiesOf('components|Playlist Video Player', module)
  .add('default', withProps(PlaylistVideoPlayer)(() =>
    <PlaylistVideoPlayer
      playlist={playlist}
      tracks={tracks}
      currentTrack={getCurrentTrack()}
      currentVideo={getCurrentVideo()}
    />,
  ))
