import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disable: false
}

function InputField(props) {
  const {
    field, form,
    type, label, placeholder, disable
  } = props

  const {name} = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]
  return (
    <div className="form-group">
      <input
        id={name} 
        {...field}

        type={type}
        disabled={disable}
        required
      />
      <label htmlFor={name}>{label}</label>
      {
        showError && 
        <p className="error-message">
          {
            errors[name]
          }
        </p>
      }
    </div>
  );
}

export default InputField;