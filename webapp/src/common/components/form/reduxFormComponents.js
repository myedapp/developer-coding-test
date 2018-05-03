import React, { Component } from 'react';
import { DropdownList, DateTimePicker, SelectList } from 'react-widgets';
import axios from 'axios';
import MaskedInput from 'react-text-mask';
import { startCase } from 'lodash';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import shortid from 'shortid';
import { getFormattedDate } from '../../utils/common';

// define special eslint rules for this file.
/* eslint react/prop-types: 0 */
/* eslint no-restricted-globals: 0 */
/* eslint no-restricted-syntax: 0 */
/* eslint no-await-in-loop: 0 */
/* eslint prefer-destructuring: 0 */

// Normalize functions
export const lowercase = value => value && value.toLowerCase();
export const uppercase = value => value && value.toUpperCase();
export const numberOnly = value => value && value.replace(/[^\d]/g, '');

export const normalizePhoneNumber = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 4) {
      return `${onlyNums} `;
    }
    if (onlyNums.length === 7) {
      return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)} `;
    }
  }
  if (onlyNums.length <= 4) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)}`;
  }
  return (
    `${onlyNums.slice(0, 4)
    } ${
      onlyNums.slice(4, 7)
    } ${
      onlyNums.slice(7, 10)}`
  );
};

export const normalizeBsbNumber = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return `${onlyNums}-`;
    }
    if (onlyNums.length === 6) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }

  return onlyNums;
};

export const normalizeCcv = (value) => {
  if (!value) {
    return value;
  }
  return value.replace(/[^\d]/g, '').slice(0, 4);
};

// Validation functions
export const required = value => (value ? undefined : 'Required');
export const arrayRequired = errorMessage => value =>
  (value && value.length > 0 ? undefined : errorMessage);

export const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);
export const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : undefined);
export const fixedLength = (fixedLength, customMessage) => value =>
  (value && value.length !== fixedLength
    ? customMessage || `Must be ${fixedLength} characters or less`
    : undefined);

export const number = value =>
  (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
export const minValue = min => value =>
  (value && value < min ? `Must be at least ${min}` : undefined);
export const email = value =>
  (value &&
    (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
      value.length > 320)
    ? 'Invalid email address'
    : undefined);
export const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined);
export const phoneNumber = value =>
  (value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined);
export const isDomainName = value =>
  (value &&
    !/^(http:\/\/|https:\/\/)?([a-z0-9][a-z0-9-]*\.)+[a-z0-9][a-z0-9-]*$/.test(value)
    ? 'Invalid domain name'
    : undefined);

export const cardIsNotExpired = (value, allValues) => {
  // won't check for validity if year and month are not selected
  let year;

  if (allValues.billing && allValues.billing.expiration) {
    year = allValues.billing.expiration.year;
  }

  if (!value || isNaN(Number(value)) || !year) {
    return undefined;
  }

  // return error if selected year is equal to current year and month is less than
  return value < new Date().getMonth() + 1 && year === new Date().getFullYear()
    ? 'Expired card'
    : undefined;
};

/**
 * Password need to contain at least 3/4 of: uppercase, lowercase, number, and symbol
 * http://www.passwordmeter.com/
 * @param {string} value
 */
export const password = (value) => {
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumbers = /\d/.test(value);
  const hasNonAlphanumeric = /\W/.test(value);

  return hasUpperCase + hasLowerCase + hasNumbers + hasNonAlphanumeric < 3
    ? 'Passsword needs to contain lower case, upper case, number, and symbol characters'
    : undefined;
};

export const objectArrayUniqueByKey = key => (values = []) => {
  const data = values.map(item => item[key]);
  return Array.from(new Set(data)).length === data.length
    ? undefined
    : `${startCase(key)} should be unique`;
};

export const maskedBSBNumber = (value) => {
  if (!value) {
    return undefined;
  }
  const sanitizedNumber = value.replace(/-/g, '');
  return sanitizedNumber && isNaN(Number(sanitizedNumber))
    ? 'Invalid BSB number'
    : undefined;
};

export const maskedPhoneNumber = (value) => {
  if (!value) {
    return undefined;
  }
  const sanitizedNumber = value.replace(/(\+|\s)/g, '');
  return sanitizedNumber && isNaN(Number(sanitizedNumber))
    ? 'Invalid phone number'
    : undefined;
};

export const composeAsyncValidators = validatorFns => async (values, dispatch, props, field) => {
  let errors;
  for (const validatorFn of validatorFns) {
    try {
      await validatorFn(values, dispatch, props, field);
    } catch (err) {
      errors = Object.assign({}, errors, err);
    }
  }

  if (errors) throw errors;
};


// const Styles = {
//   input: {
//     backgroundColor: 'transparent',
//     boxShadow: '0 0 0',
//     borderWidth: 0,
//   },
//   inputBox: {
//     backgroundColor: '#F6F6F6',
//     borderRadius: '5px',
//   },
//   sizePrefix: {
//     fontSize: 16,
//   },
//   sizePostfix: {
//     fontSize: 14,
//   },
// };
export const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  placeholder,
  required,
  disabled = false,
  style = { },
  children,
  icon = false,
  rightSide = false,
}) => {
  if (icon) {
    return (
      <div style={{ marginBottom: 15 }}>
        <label style={style.label}>
          {label || ''}
        </label>
        <div style={{ display: 'flex', justifyContent: 'space-between', ...style.inputBox }}>
          {
            !rightSide && (
              <span style={{
                  fontSize: 20,
                  lineHeight: '38px',
                  marginRight: 10,
                  marginLeft: 10,
              }}
              >
                {children}
              </span>
            )
          }

          <input
            className="form-control"
            {...input}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            style={{ display: 'inline-block', ...style.input }}
          />
          {
            touched &&
            ((error && <span className="text-danger">{error}</span>) ||
              (warning && <span>{warning}</span>))
          }

          {
            rightSide && (
              <span style={{
                  fontSize: 20,
                  lineHeight: '38px',
                  marginRight: 10,
                  marginLeft: 10,
              }}
              >
                {children}
              </span>
            )
          }
        </div>
      </div>
    );
  }
  if (type === 'hidden') {
    return <input {...input} type={type} />;
  }
  if (type === 'checkbox') {
    return (
      <div style={{ marginBottom: 15 }}>
        <div>
          <div className="checkbox">
            <label style={style.label}>
              <input {...input} placeholder={placeholder} type={type} />
              {label || ''}
            </label>
          </div>

          {touched &&
            ((error && <span className="text-danger">{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 15 }}>
      {label && (
        <label style={style.label}>
          {required ? `${label} *` : `${label}`}
        </label>
      )}
      <div style={style.inputBox}>
        <input
          className="form-control"
          {...input}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          style={style.input}
        />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

export const renderStaticText = ({ input: { value }, label, style }) => (label ? (
  <div>
    <div className="form-group">
      <label className="control-label col-sm-4" htmlFor="email" style={{ fontSize: 16 }}>
        {label}
      </label>

      <div className="col-sm-6">
        <span className="form-control-static" style={style}>
          {value}
        </span>
      </div>
    </div>
  </div>
) : (
  <span style={style}>{value}</span>
));

export const renderStaticText2Rows = ({
  input, label, style, initialValue, required, date,
}) => {
  if (!input.value && initialValue) {
    input.onChange(initialValue);
  }
  return (label ? (
    <div>
      <div className="form-group">
        <label className="control-label col-sm-12" htmlFor={label}>
          {required ? `${label} *` : `${label}`}
        </label>
        <div className="col-sm-12">
          <p className="form-control-static" style={style}>
            {date ? getFormattedDate(input.value.substr(0, 10)) : input.value || initialValue }
          </p>
        </div>
      </div>
    </div>
  ) : (
    <span style={style}>{input.value || initialValue}</span>
  ));
};

export const renderStaticTextRows = ({
  label, value, style, fix, isBool = false,
}) => (label ? (
  <div>
    <div className="form-group">
      <label className="control-label col-sm-12" htmlFor={label}>
        {`${label}`}
      </label>
      <div className="col-sm-12">
        <p className="form-control-static" style={style}>
          {isBool ? (value ? 'True' : 'False') : value}
          {fix ? '%' : null}
        </p>
      </div>
    </div>
  </div>
) : (
  <span style={style}>{value}</span>
));

// const Styles = {
//   textarea: {
//     backgroundColor: '#F6F6F6',
//     borderRadius: '5px',
//   },
// };
export const renderTextArea = ({
  input,
  label,
  meta: { touched, error, warning },
  placeholder,
  required,
  rows = 5,
  style = {},
}) => (
  <div style={{ marginBottom: 15 }}>
    {label && (
    <label style={style.label}>
        {required ? `${label} *` : `${label}`}
    </label>
      )}
    <div>
      <textarea
        rows={rows}
        className="form-control"
        {...input}
        placeholder={placeholder}
        style={style.textarea}
      />
      {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderDropdwonList = ({
  input,
  label,
  meta: { touched, error, warning },
  data,
  required,
  dropdownLabel,
  style = {},
}) => (
  <div style={{ marginBottom: 15 }}>
    {label && (
      <label style={style.label}>
        {required ? `${label} *` : `${label}`}
      </label>
      )}
    <div>
      {/* <DropdownList {...input} data={data} defaultValue={`${data[0]}`} /> */}
      <select style={style} {...input} >
        <option value="">{dropdownLabel}</option>
        {data.map(d => (
          <option
            key={shortid.generate()}
            value={d}
          >
            {d}
          </option>
        ))}
      </select>
      {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);


export const renderRWDropdownList = ({
  input,
  label,
  meta: { touched, error, warning },
  data,
  required,
  style = {},
}) => (
  <div style={{ marginBottom: 15 }}>
    {label && (
    <label style={style.label}>
      {required ? `${label} *` : `${label}`}
    </label>
      )}
    <div>
      <DropdownList {...input} data={data} defaultValue={`${data[0]}`} />
      {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderValueFieldDropdownList = ({
  input,
  label,
  meta: { touched, error, warning },
  data,
  required,
  valueFieldName,
  textFieldName,
  style = {},
  dropUpFlag = false,
}) => (
  <div style={{ marginBottom: 15 }}>
    {label && (
    <label style={style.label}>
      {required ? `${label} *` : `${label}`}
    </label>
      )}
    <div>
      <DropdownList
        {...input}
        data={data}
        defaultValue={`${data[0]}`}
        valueField={valueFieldName}
        textField={textFieldName}
        dropUp={dropUpFlag}
      />
      {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderInputMasked = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  placeholder,
  required,
  mask,
  style = {},
}) => (
  <div style={{ marginBottom: 15 }}>
    {label && (
    <label style={style.label}>
      {required ? `${label} *` : `${label}`}
    </label>
      )}
    <div>
      <MaskedInput
        className="form-control"
        {...input}
        placeholder={placeholder}
        type={type}
        mask={mask}
      />
      {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderDatePicker = ({
  input: { onChange, value },
  meta: { touched, error, warning },

  required,
  showTime = false,
  format = 'MMM/DD/YYYY', // format='MMMM / DD / YYYY'
  label,
  style = {},
}) => {
  // moment.locale();
  // moment().format('LL')
  // momentLocalizer();
  momentLocaliser(moment);

  return (
    <div style={{ marginBottom: 15 }}>
      {label && (
        <label style={style.label}>{required ? `${label} *` : `${label}`}</label>
      )}
      <div>
        <DateTimePicker
          value={!value ? null : new Date(value)}
          format={format}
          time={showTime}
          onChange={onChange}
        />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

export const renderSelectList = ({
  input,
  meta: { touched, error, warning },

  required,
  data,
  label,
  type = 'radiobutton',
  style = {},
}) => (
  <div style={{ marginBottom: 15 }}>
    {label && (
    <label style={style.label}>{required ? `${label} *` : `${label}`}</label>
      )}
    <div className="selectlist-box">
      <SelectList
        {...input}
        onBlur={() => input.onBlur()}
        data={data}
        multiple={(type === 'checkbox')}
      />
      {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
  </div>
);

// This can use as a redux-form component or standalone component
// It requires prop input={{value: fileId}} to render image
export class RenderS3Image extends Component {
  static defaultProps = {
    width: 200,
    height: 200,
  }

  state = { url: null, alt: this.props.alt, title: this.props.title }

  async componentDidMount() {
    const fileId = this.props.input ? this.props.input.value : null;
    await this.getImageUrl(fileId);
  }

  async componentWillReceiveProps(nextProps) {
    const fileId = nextProps.input ? nextProps.input.value : null;
    await this.getImageUrl(fileId);
  }

  getImageUrl = async (fileId) => {
    const { width, height } = this.props;

    if (fileId) {
      try {
        const { data: { url } } = await axios.get(`/cm/files/${fileId}`);
        this.setState({ url });
      } catch (error) {
        this.setState({ url: `http://via.placeholder.com/${width}x${height}` });
      }
    } else {
      this.setState({
        url: `http://via.placeholder.com/${width}x${height}`,
        alt: 'There is no image provided, this is just a placeholder image',
      });
    }
  }


  render() {
    const { width, height } = this.props;
    const { url, alt, title } = this.state;
    return (
      <div>
        {url && (
          <img
            src={this.state.url}
            alt={alt}
            style={{ width, height }}
            title={title || alt}
          />
        )}
      </div>
    );
  }
}

