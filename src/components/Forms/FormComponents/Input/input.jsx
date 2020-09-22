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
    placeholder,
    register,
    required,
    type
}) => (
    <div className="input-container">
        {label != null && <label className="input-label" htmlFor={name}>{required ? `${label} *` : label}</label>}
        <input 
            className={errorMessage !== null ? errorMessage && (`${className} error-display`) : className}
            disabled={disabled}
            key={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
        {errorMessage !== null && (<p className="input-error-message">{errorMessage}</p>)}
    </div>
)

export default Input;