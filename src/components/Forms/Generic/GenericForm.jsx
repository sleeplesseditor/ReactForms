import React, { useState } from 'react';
import { ValidationMessage } from '../formhelpers';
import './GenericForm.scss';

const GenericForm = () => {
    const [username, setUsername] = useState('');
    const [usernameValid, setUsernameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState({});

    // Validate Form
    const validateForm = () => {
        setFormValid(usernameValid && emailValid && passwordValid && passwordConfirmValid)
    }

    // Validate Username
    const validateUsername = (e) => {
        setUsername(e.target.value)
        let tempUsernameValid = true;
        let tempErrorMsg = {...errorMsg}

        if (username.length < 6 || username.length > 15) {
            tempUsernameValid = false;
            tempErrorMsg.username = "Username should be between 6 and 15 characters"
        }

        setUsernameValid(tempUsernameValid);
        setErrorMsg(tempErrorMsg);
        validateForm();
    }

    // Validate Email
    const validateEmail = (e) => {
        let tempEmailValid = true;
        let tempErrorMsg = {...errorMsg}

        setEmail(e.target.value);

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            tempEmailValid = false;
            tempErrorMsg.email = "Invalid email format";
        }

        setEmailValid(tempEmailValid);
        setErrorMsg(tempErrorMsg);
        validateForm();
    }

    // Validate Password
    const validatePassword = (e) => {
        let tempPasswordValid = true;
        let tempErrorMsg = {...errorMsg};

        setPassword(e.target.value)

        if (password.length < 8) {
            tempPasswordValid = false;
            tempErrorMsg.password = "Password should be at least 8 characters"
        }

        setPasswordValid(tempPasswordValid);
        setErrorMsg(tempErrorMsg);
        validateForm();
    }

    // Confirm Password
    const validateConfirmPassword = (e) => {
        let tempPasswordConfirmValid = true;
        let tempErrorMsg = {...errorMsg};

        setPasswordConfirm(e.target.valid);

        if (password !== passwordConfirm) {
            tempPasswordConfirmValid = false;
            tempErrorMsg.passwordConfirm = "Passwords do not match"
        }

        setPasswordConfirmValid(tempPasswordConfirmValid);
        setErrorMsg(tempErrorMsg);
        validateForm();
    }

    // Reset Form
    const resetForm = () => {
        setUsername('');
        setUsernameValid(false);
        setEmail('');
        setEmailValid(false);
        setPassword('');
        setPasswordValid(false);
        setPasswordConfirm('');
        setPasswordConfirmValid(false);
        setFormValid(false);
        setErrorMsg({});
    }

    return (
        <div>
            <form>
                {/* Username */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" value={username}
                        onChange={(e) => validateUsername(e)}/>
                        <span>
                            <ValidationMessage
                                valid={usernameValid}
                                message={errorMsg.username}
                            />
                        </span>
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email}
                    onChange={(e) => validateEmail(e)}/>
                    <span>
                        <ValidationMessage 
                            valid={emailValid}
                            message={errorMsg.email}
                        />
                    </span>
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                    onChange={(e) => validatePassword(e)}/>
                    <span>
                        <ValidationMessage 
                            valid={passwordValid}
                            message={errorMsg.password}
                        />
                    </span>
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" value={passwordConfirm}
                    onChange={(e) => validateConfirmPassword(e)}/>
                    <span>
                        <ValidationMessage 
                            valid={passwordConfirmValid}
                            message={errorMsg.passwordConfirm}
                        />
                    </span>
                </div>

                <div className="form-btn-group">
                    <button className="btn btn-primary" type="submit" disabled={!formValid}>Submit</button>
                    <button className="btn btn-danger" onClick={resetForm}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default GenericForm;