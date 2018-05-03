import React from 'react';
import { string, any } from 'prop-types';
import InnerDivider from './InnerDivider';

const Styles = {
  box: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 2,
  },
  title: {
    color: '#23ACFF',
    fontSize: 20,
    marginBottom: 8,
  },
};

class SimpleCardLayout extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div style={Styles.box}>
        <div style={Styles.title}>{title}</div>
        <InnerDivider />
        {children}
      </div>
    );
  }
}

SimpleCardLayout.propTypes = {
  title: string.isRequired,
  children: any.isRequired,
};

export default SimpleCardLayout;
