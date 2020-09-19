import React, { useState } from 'react'
import { Formik } from 'formik';
import { basicValidationSchema } from '../validation/basicFormValidator';
import './FormikStyling.scss';

const FormikBasic = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (values) => {
        setUserName(values.userName);
        setEmail(values.email);
        setPassword(values.password);
        setConfirmPassword(values.confirmPassword);
    }

    return (
        <div>
            <Formik 
                initialValues={{userName: '', email: '', password: '', confirmPassword: '', isSubmitting: true }}
                validationSchema={basicValidationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        setUserName(values.userName);
                        setEmail(values.email);
                        setPassword(values.password);
                        setConfirmPassword(values.confirmPassword);
                        setSubmitting(true)
                        resetForm();
                        setSubmitting(false);
                    }, 400);
                }}
            >
             {({
                values,
                errors,
                touched,
                dirty,
                isSubmitting,
                handleInputChange,
                handleBlur,
                handleReset,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit} noValidate>
                    {/* Username */}
                    <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="userName"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={values.userName}
                    />
                    <span className="help-block text-danger">{errors.userName && touched.userName && errors.userName}</span>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <span className="help-block text-danger">{errors.email && touched.email && errors.email}</span>
                    </div>

                     {/* Password */}
                     <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <span className="help-block text-danger">{errors.password && touched.password && errors.password}</span>
                    </div>

                     {/* Confirm Password */}
                     <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                    />
                    <span className="help-block text-danger">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                    </div>
                    <div className="form-btn-group">
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                        <button
                            disabled={!dirty}
                            onClick={handleReset}
                            type="button"
                            className="btn btn-danger"
                        >Reset</button>
                    </div>
                </form>       
            )}        
            </Formik>
        </div>
    )
}

export default FormikBasic;
