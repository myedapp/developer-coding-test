import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { validateLoginData as validate } from '../helpers';
import CheckboxField from '../../../common/components/form/CheckboxField';
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

const LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div style={{ fontSize: 20, marginBottom: 20 }}>Welcome to myEdOnline</div>
    <div className="text-left">
      <Field name="loginId" component={renderInput} type="text" placeholder="Email" icon style={Styles}>
        <i className="fa fa-envelope" />
      </Field>
    </div>
    <div className="text-left">
      <Field name="password" component={renderInput} type="password" placeholder="Password" icon style={Styles} >
        <i className="fa fa-lock" />
      </Field>
    </div>
    <div className="text-left">
      <Field name="remember" component={CheckboxField} label="Remember me" />
    </div>
    <div>
      <SubmitButton
        type="submit"
        className="btn btn-default submit"
        submitting={submitting}
        submitLabel="Logging..."
        style={{ width: '100%', color: '#239DFF', fontWeight: '600' }}
      >
        SIGN IN
      </SubmitButton>
      <br />
      <a
        className="reset_pass"
        href="/admin/reset-password"
        style={{
          float: 'none',
          color: 'white',
          display: 'block',
          marginRight: 0,
        }}
      >
        Forgot Password?
      </a>
    </div>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'adminLogin',
  validate,
})(LoginForm);
