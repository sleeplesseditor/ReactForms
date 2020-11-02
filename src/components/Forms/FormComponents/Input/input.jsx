import React from 'react';
import './input.scss';

const Input = ({
    className,
    disabled,
    errorMessage,
    errorType,
    label,
    name,
    onChange,
    passwordStrength,
    placeholder,
    register,
    required,
    type
}) => (
    <div className="input-container">
        {label != null && <label className="input-label" htmlFor={name}>{required ? `${label} *` : label}</label>}
        <input 
            aria-label={name}
            className={errorMessage !== null ? errorMessage && (`${className} error-display`) : className}
            disabled={disabled}
            key={name}
            name={name}
            onChange={passwordStrength ? onChange && passwordStrength : onChange}
            placeholder={placeholder}
            type={type}
        />
        {errorMessage !== null && (<p className="input-error-message">{errorMessage}</p>)}
    </div>
)

export default Input;