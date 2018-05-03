import React from 'react';
import { any } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { validateIdentity, getComponentName } from '../../common/helpers';

/**
 * Higher order component that perform authentication checking
 *
 * If user is authenticated, the wrapped component is rendered
 * else, set browser url to a passed login url
 *
 * @param {String} loginUrl
 */
const LoginRequired = loginUrl => (WrappedComponent) => {
  const Wrapper = (props) => {
    const { identity, ...passthroughProps } = props;

    return validateIdentity(identity) ?
      <WrappedComponent {...passthroughProps} /> :
      <Redirect to={{
        pathname: loginUrl,
        state: { from: props.location },
      }}
      />;
  };

  Wrapper.displayName = `LoginRequired(${getComponentName(WrappedComponent)})`;
  Wrapper.propTypes = {
    identity: any,
    location: any,
  };
  Wrapper.defaultProps = {
    identity: {},
    location: {},
  };

  return connect(state => ({
    identity: state.common.identity,
  }))(Wrapper);
};

export default LoginRequired;
