import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../form.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/register", data)
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err.response.status && err.response.status === 409) {
          setError("email", {
            type: "manual",
            message: "The user already exists",
          });
        }
      })
      .finally(() => {});
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
            <h2>Hello!</h2>
            <p>Register to Get Started</p>
          </div>
          <div className="form__field-container">
            <FormControl
              className="form-control"
              id="fullName"
              isInvalid={errors.fullName}
            >
              <FormLabel style={{ fontSize: "14px" }}>Full name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("fullName", {
                  required: "This field can not be empty",
                })}
                isDisabled={isSubmitting}
              />
              <FormErrorMessage className="form-error-message">
                {errors.fullName && errors.fullName.message}
              </FormErrorMessage>
            </FormControl>
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
                isDisabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              <FormErrorMessage className="form-error-message">
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              className="form-control"
              id="confirmPassword"
              isInvalid={errors.confirmPassword}
            >
              <FormLabel style={{ fontSize: "14px" }}>
                Confirm Password
              </FormLabel>
              <Input
                formNoValidate
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "This field can not be empty",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Password does not match",
                })}
                disabled={isSubmitting}
              />
              <FormErrorMessage className="form-error-message">
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>
          </div>
          <div className="form__bottom-container">
            <Button
              type={"submit"}
              colorScheme="teal"
              style={{ width: "50%" }}
              isLoading={isSubmitting}
            >
              Register
            </Button>
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "teal", fontWeight: 500 }}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
