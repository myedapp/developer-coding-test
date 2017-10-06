import './Tag.scss'

import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

export default class Tag extends React.PureComponent {

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
    active: false,
    className: null, 
    children: null,
  }

  render() {
    const { active, children, className } = this.props

    return (
      <span className={classNames('Tag', { 'Tag--active': active }, className)}>
        {children}
      </span>
    )
  }
}