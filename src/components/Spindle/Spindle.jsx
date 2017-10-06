import './Spindle.scss'

import classNames from 'classnames'
import CircularProgressbar from 'react-circular-progressbar'
import React from 'react'
import PropTypes from 'prop-types'

export default class Spindle extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }

  static defaultProps = {
    className: null, 
    label: '',
    value: 0,
  }

  render() {
    const { className, label, value } = this.props

    return (
      <div className={classNames('Spindle', className)}>
        <CircularProgressbar textForPercentage={(pct) => `${pct}`} percentage={value} />
        <strong className="Spindle__label">{label}</strong>
      </div>
    )
  }
}