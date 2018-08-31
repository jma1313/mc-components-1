import React, { PureComponent } from 'react'
import { number } from 'prop-types'

import './index.scss'

export default class ProgressRing extends PureComponent {
  static propTypes = {
    progress: number.isRequired,
    time: number,
    radius: number,
    stroke: number,
  }

  static defaultProps = {
    radius: 18.25,
    stroke: 3,
  }

  constructor (props) {
    super(props)

    const { radius, stroke } = this.props

    this.normalizedRadius = radius - (stroke * 2)
    this.circumference = this.normalizedRadius * 2 * Math.PI
  }

  render () {
    const {
      radius,
      stroke,
      progress,
      time,
    } = this.props

    const strokeDashoffset =
      this.circumference - ((progress / 100) * this.circumference)
    const size = radius * 2

    return (
      <div className='progress-ring'>
        <div
          className='progress-ring__content'
          style={{ width: size, height: size }}
        >
          <svg height={size} width={size}>
            <circle
              stroke='white'
              opacity={0.3}
              strokeWidth={stroke}
              fill='transparent'
              r={this.normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke='white'
              fill='transparent'
              className='progress-ring__circle'
              strokeWidth={stroke}
              strokeDasharray={`${this.circumference} ${this.circumference}`}
              style={{ strokeDashoffset }}
              r={this.normalizedRadius}
              cx={radius}
              cy={radius}
            />
          </svg>
          {time &&
            <p className='progress-ring__time'>{time}</p>
          }
        </div>
      </div>
    )
  }
}
