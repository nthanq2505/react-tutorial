import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../form.css";
import { loginAPI } from "../../apis";
import { login } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const { isAuthenticated } = useSelector((state) => state);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    try {
      const loginResult = await loginAPI(data);

      if (loginResult) {
        const { data } = loginResult?.data;
        dispatch(login(data));
        if (data?.rememberMe) {
          localStorage.setItem("authToken", data?.token);
        } else {
          sessionStorage.setItem("authToken", data?.token);
        }
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        if (error.response?.status === axios.HttpStatusCode.NotFound) {
          setError("email", {
            type: "manual",
            message: error.response.data.message,
          });
        } else if (
          error.response?.status === axios.HttpStatusCode.Unauthorized
        ) {
          setError("password", {
            type: "manual",
            message: error.response.data.message,
          });
        }
      } else {
        setError("email", {
          type: "manual",
          message: "Internal server error",
        });
      }
    }
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
            <Checkbox colorScheme="teal" {...register("rememberMe")}>
              Remember me
            </Checkbox>
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
