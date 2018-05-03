import React, { Component } from 'react';
import { func } from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import resetPassword from '../actions';
import ResetPasswordForm from './ResetPasswordForm';
import BlankLayout from '../../hoc/BlankLayout';

class ResetPasswordPage extends Component {
  state = {
    isReset: false,
    data: {
      email: 'react.app@test.com',
    },
  }
  onSubmit = async (data) => {
    try {
      await this.props.resetPassword(data);
      this.setState({ isReset: true });
    } catch (error) {
      throw new SubmissionError({
        ...error.errors,
        _error: error.message,
      });
    }
  }

  render() {
    return this.state.isReset ?
      <Redirect to="/" /> :
      <ResetPasswordForm onSubmit={this.onSubmit} initialValues={this.state.data} />;
  }
}

ResetPasswordPage.propTypes = {
  resetPassword: func.isRequired,
};

export default compose(
  BlankLayout,
  connect(
    undefined,
    dispatch => ({
      resetPassword: (data) => {
        const action = resetPassword(data);
        dispatch(action);
        return action.promise;
      },
    }),
  ),
)(ResetPasswordPage);
