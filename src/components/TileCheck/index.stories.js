import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileCheck from '../TileCheck'


storiesOf('components|Tiles/TileCheck', module)
  .add('TileCheck', withProps(TileCheck)(() => (
    <div className='container'>
      <h2 className='mc-text-h2'>TileCheck</h2>

      <DocSection title='Props'>
        <PropExample
          name='checked'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileCheck checked>
                  {({ checked }) =>
                    <Placeholder>
                      {checked ? 'true' : 'false'}
                    </Placeholder>
                  }
                </TileCheck>
              </Tile>
            </div>

            <div className='col-sm-6'>
              <Tile>
                <TileCheck>
                  {({ checked }) =>
                    <Placeholder>
                      {checked ? 'true' : 'false'}
                    </Placeholder>
                  }
                </TileCheck>
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))
