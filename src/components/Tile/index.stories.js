import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import TileCheck from '../TileCheck'
import AnimationHandler from '../AnimationHandler'
import HoverHandler from '../HoverHandler'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles', module)
  .add('Summary', () => (
    <div className='container'>
      <div className='container'>
        <h2>Tile</h2>

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <DocSection title='Tile'>
              <Tile>
                <Placeholder>
                  (empty)
                </Placeholder>
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileImage'>
              <Tile>
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileOverlay'>
              <Tile>
                <TileOverlay type='gradient-bottom' />
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileCaption'>
              <Tile>
                <TileCaption
                  title='Shonda Rhimes'
                  subtitle='Teaches Writing'
                />
                <TileOverlay type='gradient-bottom' />
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileCheck'>
              <Tile>
                <TileCheck checked />
                <TileCaption
                  title='Shonda Rhimes'
                  subtitle='Teaches Writing'
                />
                <TileOverlay type='gradient-bottom' />
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='w/ Animations'>
              <HoverHandler>
                {({ hovering }) =>
                  <Tile>
                    <TileCheck>
                      {() =>
                        <Fragment>
                          <AnimationHandler
                            type='lift'
                            animating={hovering}
                          >
                            <TileCaption
                              title='Shonda Rhimes'
                              subtitle='Teaches Writing'
                            />
                          </AnimationHandler>

                          <TileOverlay type='gradient-bottom' />

                          <AnimationHandler
                            type='ken-burns'
                            animating={hovering}
                          >
                            <TileImage imageUrl={shondaRhimesThumbnail} />
                          </AnimationHandler>
                        </Fragment>
                      }
                    </TileCheck>
                  </Tile>
                }
              </HoverHandler>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  ))


storiesOf('components|Tiles/Tile', module)
  .add('Tile', () => (
    <div className='container'>
      <div className='container'>
        <h2>Tile</h2>

        <DocSection title='Props'>
          <PropExample
            name='aspectRatio'
            type='String[16x9]'
          >
            <div className='row'>
              <div className='col-sm-4'>
                <Tile aspectRatio='16x9'>
                  <Placeholder>16x9</Placeholder>
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile aspectRatio='4x3'>
                  <Placeholder>4x3</Placeholder>
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile aspectRatio='100x65'>
                  <Placeholder>100x65</Placeholder>
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile aspectRatio='1000x609'>
                  <Placeholder>1000x609</Placeholder>
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile aspectRatio='519x187'>
                  <Placeholder>519x187</Placeholder>
                </Tile>
              </div>
            </div>
          </PropExample>
        </DocSection>
      </div>
    </div>
  ))
