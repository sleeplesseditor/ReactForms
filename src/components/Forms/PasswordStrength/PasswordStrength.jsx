import React from 'react';
import './PasswordStrength.scss';

const PasswordStrength = ({ passwordValue }) => {
    let strength = 0;
    let validations = []

    const password = passwordValue;
        validations = [
            (password.length > 5), 
            (password.search(/[A-Z]/) > -1), 
            (password.search(/[0-9]/) > -1), 
            (password.search(/[$&+,:;=?@#]/) > -1) 
        ]
        strength = validations.reduce((acc, cur) => acc + cur, 0)
    
    return (
        <>
            <div className="strength">
                <span className={`bar bar-1 ${strength > 0 ? 'bar-show': ''}`} />
                <span className={`bar bar-2 ${strength > 1 ? 'bar-show': ''}`} />
                <span className={`bar bar-3 ${strength > 2 ? 'bar-show': ''}`} />
                <span className={`bar bar-4 ${strength > 3 ? 'bar-show': ''}`} />
            </div>
            {validations.length > 0 ? (
                <ul>
                    <li> {validations[0] ? '✔️' : '❌'}  Must be at least 5 characters</li>
                    <li> {validations[1] ? '✔️' : '❌'}  Must contain a capital letter</li>
                    <li> {validations[2] ? '✔️' : '❌'}  Must contain a number</li>
                    <li> {validations[3] ? '✔️' : '❌'}  Must contain one of $&+,:;=?@#</li>
                </ul>
            ) : null}
        </>
    )
}

export {
    PasswordStrength
};