import { PureComponent } from 'react'
import { number, func } from 'prop-types'

export default class Timer extends PureComponent {
  static propTypes = {
    /* time in seconds */
    time: number.isRequired,
    onFinish: func.isRequired,
    children: func.isRequired,
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
    const { onFinish } = this.props

    const reducedTime = time - 1
    this.setState({ time: reducedTime })
    // recursive function
    if (reducedTime > 0) {
      this.setTimer()
    } else if (reducedTime === 0) {
      onFinish()
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
    const { children } = this.props

    return children({ time, totalTime: this.props.time })
  }
}
