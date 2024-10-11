const Validation = (values) => {
    let errors = {};
    
    if (!values.email) {
        errors.email = "This field cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = `Please enter a valid email address in format: \n name@example.com`;
    }
    
    if (!values.password) {
        errors.password = "This field cannot be empty";
    } else if (values.password.length < 6) {
        errors.password = `Please enter a valid password. The password is required at least 6 characters`;
    }
    
    return errors;
};

export default Validation;