//  SelectFieldGroup
//
//  A component for rendering select inputs for forms
//  taking name, placeholder ... and a special 
//  options prop as array of {label:'',value:''} object
//  for options

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectFieldGroup = (props) => {
    const {
        name,
        placeholder,
        value,
        onChange,
        error,
        info,
        options
    } = props;

    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ))

    return (
        <div className="form-group">
            <select
                className={classnames(
                    "form-control form-control-lg",
                    {
                        "is-invalid": error,
                    }
                )}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}>
                {selectOptions}
            </select>
            
            {error && <div className="invalid-feedback">{error}</div>}
            {info && <div className="font-small pl-1">{info}</div>}
        </div>
    );
}

SelectFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    options: PropTypes.array.isRequired
};

SelectFieldGroup.defaultProps = {
    type: 'text'
}

export default SelectFieldGroup;
