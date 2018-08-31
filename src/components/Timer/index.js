import React, { PureComponent } from 'react'
import { number, func } from 'prop-types'

export default class Timer extends PureComponent {
  static propTypes = {
    /* time in seconds */
    time: number.isRequired,
    onFinish: func.isRequired,
  }
  constructor (props) {
    super(props)

    this.state = { time: props.time }
  }

  componentDidMount () {
    this.setTimer()
  }

  componentWillUnmount () {
    this.clearTimer()
  }

  setTimer = () => {
    const timerId = setTimeout(this.reduceTimer, 1000)
    this.setState({ timerId })
  }

  reduceTimer = () => {
    const { time } = this.state
    this.setState({ time: time - 1 })
    // recursive function
    if (time - 1 > 0) {
      this.setTimer()
    }
  }

  clearTimer () {
    const { timerId } = this.state
    if (timerId) {
      clearTimeout(timerId)
    }
  }

  render () {
    const { time } = this.state

    return (
      <p>{time}</p>
    )
  }
}
