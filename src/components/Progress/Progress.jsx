import './Progress.scss'
import Pin from 'assets/person_pin_circle.svg'

import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Progress extends React.PureComponent {

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
      <div className={classNames('Progress', className)}>
        <strong className="Progress__label">{label}</strong>
        <div className="Progress__track-wrapper">
          <Pin className="Progress__pin" style={{ left: `${value}%` }} />
          <div className="Progress__track-bar" />
        </div>
        <div className="Progress__marker-wrapper">
          <span className="Progress__marker" />
          <span className="Progress__marker" />
          <span className="Progress__marker" />
        </div>
      </div>
    )
  }
}