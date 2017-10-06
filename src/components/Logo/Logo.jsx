import './Logo.scss'

import React from 'react'

export default class Logo extends React.PureComponent {
  render() {
    return (
      <span className="Logo">
        <span className="Logo__light">my</span>
        <span className="Logo__heavy">Ed</span>
      </span>
    )
  }
}