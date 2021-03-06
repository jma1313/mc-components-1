import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('foundation|Variables', module)
  .add('All', () =>
    <div className='example-mc-variables'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Variables</h2>
        <p>Colors, breakpoints, and mixins, oh my!</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>Base</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-dark'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-dark</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-light'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-light</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>Primary</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-primary'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-primary</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-primary-hover'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-primary-hover</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-primary-active'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-primary-active</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>Secondary</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-secondary'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-secondary</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-secondary-hover'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-secondary-hover</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-secondary-active'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-secondary-active</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>Tertiary</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-tertiary'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-tertiary</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-tertiary-hover'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-tertiary-hover</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>Backgrounds + Text</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-background'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-background</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-background-invert'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-background-invert</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-text'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-text</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-text-invert'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-text-invert</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>Grays</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-gray-100'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-gray-100</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-gray-200'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-gray-200</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-gray-300'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-gray-300</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-gray-400'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-gray-400</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-gray-500'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-gray-500</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>

              <div className='example-mc-swatch example-mc-swatch--mc-color-gray-600'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-gray-600</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='align-items-center example--section'>
              <h2 className='mc-text-h2'>States</h2>

              <div className='example-mc-swatch example-mc-swatch--mc-color-error'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-error</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
              <div className='example-mc-swatch example-mc-swatch--mc-color-warning'>
                <span className='example-mc-swatch__color'></span>
                <div>
                  <p className='mc-text-h5 mc-text--monospace'>$mc-color-warning</p>
                  <p className='example-mc-swatch__hex mc-text-h5 mc-text--muted mc-text--monospace'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='align-items-center example--section'>
          <h1 className='mc-text-h1'>Breakpoints</h1>
          <ul className='mc-example-breakpoints'>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$grid-gutter-width:</span>
                <span className='mc-text--bold mc-gutter-value'></span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$grid-gutter-width-xl:</span>
                <span className='mc-text--bold mc-gutter-value--xl'></span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-xs:</span>
                <span className='mc-text--bold mc-bp-value--xs'></span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-sm:</span>
                <span className='mc-text--bold mc-bp-value--sm'></span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-md:</span>
                <span className='mc-text--bold mc-bp-value--md'></span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-lg:</span>
                <span className='mc-text--bold mc-bp-value--lg'></span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-xl:</span>
                <span className='mc-text--bold mc-bp-value--xl'></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>,
  )
