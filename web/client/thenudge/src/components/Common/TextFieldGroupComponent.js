// TextFieldComponent
//
// A simple reusabele functional text field component for forms
// which takes name, placeholder, value... as props and renders
// a text input.
//

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = (props) => {
    const {
        name,
        placeholder,
        value,
        onChange,
        error,
        type,
        info,
        disabled
    } = props;
    return (
      <div className="form-group">
        <input
          type={type}
          className={classnames(
            "form-input-text form-control form-control-lg",
            {
              "is-invalid": error,
            }
          )}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {error && <div className="invalid-feedback text-left ml-1">{error}</div>}
        {info && <div className="font-small text-left ml-1">{info}</div>}
      </div>
    );
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  info: PropTypes.string,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;
