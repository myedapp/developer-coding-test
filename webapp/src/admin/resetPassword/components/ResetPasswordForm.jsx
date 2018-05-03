import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../helpers';
import SubmitButton from '../../../common/components/form/SubmitButton';
import { renderInput } from '../../../common/components/form/reduxFormComponents';

const Styles = {
  input: {
    backgroundColor: 'transparent',
    boxShadow: '0 0 0',
  },
  inputBox: {
    backgroundColor: '#2293EF',
    borderRadius: '5px',
  },
};
const ResetPasswordForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div style={{ fontSize: 20, marginBottom: 20 }}>Enter Your Email</div>
    <div style={{ fontSize: 14, marginBottom: 20 }}>
      Enter your email address and we will send you password reset instructions
    </div>
    <div className="text-left">
      <Field name="email" component={renderInput} type="text" placeholder="Email" icon style={Styles}>
        <i className="fa fa-envelope" />
      </Field>
    </div>
    <div>
      <SubmitButton
        type="submit"
        className="btn btn-default submit"
        submitting={submitting}
        submitLabel="Logging..."
        style={{ width: '100%', color: '#239DFF', fontWeight: '600' }}
      >
        Send Reset Request
      </SubmitButton>
      {/* <a className="reset_pass" href="/admin/reset-password">Lost your password?</a> */}
    </div>
  </form>
);

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'adminResetPassword',
  validate,
})(ResetPasswordForm);
