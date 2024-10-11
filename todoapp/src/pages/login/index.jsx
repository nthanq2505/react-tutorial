import React from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Checkbox,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../form.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="auth-page" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="left-content">
        <h1>Todo App</h1>
        <p>Manage your work every day</p>
      </div>
      <div className="right-content">
        <div className="form">
          <div className="form__title">
            <h2>Welcome back!</h2>
            <p>Login to Get Started</p>
          </div>
          <div className="form__field-container">
            <FormControl
              className="form-control"
              id="email"
              isInvalid={errors.email}
            >
              <FormLabel style={{ fontSize: "14px" }}>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "This field can not be empty",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "Please enter a valid email address in format: name@example.com",
                  },
                })}
              />
              <FormErrorMessage className="form-error-message">
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              className="form-control"
              id="password"
              isInvalid={errors.password}
            >
              <FormLabel style={{ fontSize: "14px" }}>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter at least 6 characters"
                {...register("password", {
                  required: "This field can not be empty",
                  minLength: {
                    value: 6,
                    message:
                      "Please enter a valid password. The password is required at least 6 characters",
                  },
                })}
              />
              <FormErrorMessage className="form-error-message">
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </div>
          <div className="form__bottom-container">
            <Checkbox colorScheme="teal">Remember me</Checkbox>
            <Button
              type={"submit"}
              colorScheme="teal"
              style={{ width: "100%" }}
            >
              Login
            </Button>
            <p>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "teal", fontWeight: 500 }}>
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
