import React from 'react';
import './PasswordStrength.scss';

let strength = 0;
let validations = []
function validatePassword(e) {
  const password = e.target.value;
  validations = [
      (password.length > 5), 
      (password.search(/[A-Z]/) > -1), 
      (password.search(/[0-9]/) > -1), 
      (password.search(/[$&+,:;=?@#]/) > -1) 
  ]
  strength = validations.reduce((acc, cur) => acc + cur, 0)
}

const PasswordStrength = () => {
    const strengthText = ["", "bad 💩", "ok 😐", "decent 🙂", "solid 💪"];

    return (
        <>
            <div className="strength">
                <span className={`bar bar-1 ${strength > 0 ? 'bar-show': ''}`} />
                <span className={`bar bar-2 ${strength > 1 ? 'bar-show': ''}`} />
                <span className={`bar bar-3 ${strength > 2 ? 'bar-show': ''}`} />
                <span className={`bar bar-4 ${strength > 3 ? 'bar-show': ''}`} />
            </div>
            {validations.length ? (
                <ul>
                    <li> {validations[0] ? '✔️' : '❌'} must be at least 5 characters</li>
                    <li> {validations[1] ? '✔️' : '❌'} must contain a capital letter</li>
                    <li> {validations[2] ? '✔️' : '❌'} must contain a number</li>
                    <li> {validations[3] ? '✔️' : '❌'} must contain one of $&+,:;=?@#</li>
                </ul>
            ): null}
            <div className="strength-text">{strengthText[strength]}</div>
        </>
    )
}

export {
    PasswordStrength,
    validatePassword
};