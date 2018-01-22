import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import style from './flexboxgrid.css';

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

export default class Row extends Component {

  render() {
    const modificators = ['row'];
    for (let i = 0; i < modificatorKeys.length; ++i) {
      const key = modificatorKeys[i];
      const value = this.props[key];
      if (value) {
        modificators.push(`${key}-${value}`);
      }
    }

    if (this.props.reverse) {
      modificators.push('reverse');
    }

    const className = classNames(this.props.className, modificators);

    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className
    }), this.props.children);
  }
}

Row.propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};
