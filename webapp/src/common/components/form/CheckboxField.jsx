import React from 'react';
import PropTypes from 'prop-types';
import ErrorList from './ErrorList';

/**
 * Form group field for checkbox
 * Used with Field component of redux-form
 */
const CheckboxField = (props) => {
  const { input, meta: { touched, error }, label } = props;
  const className = touched && error ? 'has-error' : '';
  return (
    <div className={className}>
      <div className="checkbox">
        <label>
          <input {...input} type="checkbox" /> {label}
        </label>
      </div>
      {touched && <ErrorList errors={error} />}
    </div>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
};

CheckboxField.defaultProps = {
  label: '',
};

export default CheckboxField;
