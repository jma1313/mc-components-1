import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import PlaylistVideoPlayer from '../PlaylistVideoPlayer'


storiesOf('components|Playlist Video Player', module)
  .add('default', withProps(PlaylistVideoPlayer)(() =>
    <PlaylistVideoPlayer
      playlist={{
        name: 'Are you taking risks',
        description: 'While fear of failure is natural, risking failure is the price of greatness. How do you determine whether a risk is worth taking?  Learn how to think about and evaluate risk, how risk-taking can enhance your success, what can happen when you risk everything to be true to yourself, and when you risk and fail.',
      }}
      currentTrack={{
        video: { id: '5450137526001' },
        position: 1,
      }}
    />,
  ))
