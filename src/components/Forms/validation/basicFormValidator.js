import * as Yup from 'yup';

const basicValidationSchema = Yup.object().shape({
    userName: Yup.string()
        .min(6, "Username should be between 6 and 15 characters")
        .max(15, "Username should be between 6 and 15 characters")
        .required("Username is required"),
    
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    
    password: Yup.string()
        .min(8, "Should be at least 8 charcters")
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords don't match")
        .required('Password Confirmation is required')
})

export { basicValidationSchema };