import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import HeaderV2 from '../HeaderV2'

storiesOf('components|Structure/HeaderV2', module)
  .add(
    'default',
    withInfo()(() => <HeaderV2 name='berna' />),
  )
  .add(
    'with avatar',
    withInfo()(() => (
      <HeaderV2
        avatar='https://graph.facebook.com/10156122473642900/picture?height=300&width=300'
        name='berna'
      />
    )),
  )
  .add(
    'with gradient background',
    withInfo()(() => (
      <HeaderV2
        avatar='https://graph.facebook.com/10156122473642900/picture?height=300&width=300'
        name='berna'
        isSolid={false}
      />
    )),
  )
  .add(
    'with instructor and course name',
    withInfo()(() => (
      <HeaderV2
        name='berna'
        instructorName='Gordan Ramsay'
        courseName='Teaches cooking'
      />
    )),
  )
  .add(
    'without user name',
    withInfo()(() =>
      <HeaderV2 />,
    ),
  )
