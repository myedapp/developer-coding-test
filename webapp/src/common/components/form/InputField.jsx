import React from 'react';
import PropTypes from 'prop-types';
import ErrorList from './ErrorList';

/**
 * Form group field for input tag
 * Used with Field component of redux-form
 */
const InputField = (props) => {
  const {
    input,
    meta: { touched, error },
    label,
    type,
    ...otherProps
  } = props;
  const className = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${className}`}>
      {label && <label className="control-label">{label}</label>}
      <input {...input} {...otherProps} className="form-control" type={type} />
      {touched && <ErrorList errors={error} />}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

InputField.defaultProps = {
  label: '',
  type: '',
};


export default InputField;
