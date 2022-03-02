import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, CheckBox, Input } from "../../components";

import Envelope from "../../images/svg/ic-contact-mail.svg";
import Lock from "../../images/svg/ic-security-locked.svg";
import Person from "../../images/svg/ic-person.svg";
import Thing from "../../images/svg/loginscreen-thing.js";
import Logo from "../../images/svg/logo.js";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Index = () => {
  const formik = useFormik({
    initialValues: { initialValues },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "It needs to be less than 20 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Enter a stronger password"
        )
        .required("Password is required"),
      confirm_password: Yup.string()
        .when("password", {
          is: (password) => (password && password.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords dont't match"
          ),
        })
        .required("You need to confirm your password"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function policyTos() {
    history.push("/coming-soon");
  }

  const inputsCont = [
    {
      title: "Username",
      placeholder: "Enter your username",
      icon: Person,
      error: formik.errors.username && formik.touched.username ? true : false,
      errorMessage:
        formik.errors.username && formik.touched.username
          ? formik.errors.username
          : "",
      clsInput: `${
        formik.errors.username && formik.touched.username
          ? " "
          : " focus-within:border-C2-B "
      }`,
      type: "text",
      dataProps: { ...formik.getFieldProps("username") },
    },

    {
      title: "Email address",
      placeholder: "Enter your email",
      icon: Envelope,
      error: formik.errors.email && formik.touched.email ? true : false,
      errorMessage:
        formik.errors.email && formik.touched.email ? formik.errors.email : "",
      clsInput: `${
        formik.errors.email && formik.touched.email
          ? " "
          : " focus-within:border-C2-B "
      }`,
      type: "email",
      dataProps: { ...formik.getFieldProps("email") },
    },

    {
      title: "Password",
      placeholder: "Enter your password",
      icon: Lock,
      error: formik.errors.password && formik.touched.password ? true : false,
      errorMessage:
        formik.errors.password && formik.touched.password
          ? formik.errors.password
          : "",
      clsInput: `${
        formik.errors.password && formik.touched.password
          ? " "
          : " focus-within:border-C2-B "
      }`,
      type: "password",
      dataProps: { ...formik.getFieldProps("password") },
    },

    {
      title: "Confirm Password",
      placeholder: "Confirm your password",
      icon: Lock,
      error:
        formik.errors.confirm_password && formik.touched.confirm_password
          ? true
          : false,
      errorMessage:
        formik.errors.confirm_password && formik.touched.confirm_password
          ? formik.errors.confirm_password
          : "",
      clsInput: `${
        formik.errors.confirm_password && formik.touched.confirm_password
          ? " "
          : " focus-within:border-C2-B "
      }`,
      type: "password",
      dataProps: { ...formik.getFieldProps("confirm_password") },
    },
  ];

  return (
    <div className="flex min-h-screen h-full bg-C2-default min-w-screen w-full justify-center">
      <div className="hidden md:flex md:flex-col min-h-screen md:w-2/5 lg:w-1/2 bg-white">
        <div className="flex flex-row justify-between items-center w-full">
          <h2
            className="font-bold text-xl mx-10 cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-C2-default">Ultra</span>
            Buy
          </h2>
          <div
            className="flex md:w-8 lg:w-12 xl:w-16 mx-10 py-3 cursor-pointer"
            onClick={handleClick}
          >
            <Logo />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center my-auto">
          <div className="flex justify-center">
            <Thing />
          </div>
          <div className="text-white w-full flex justify-center pt-10 lg:pt-14">
            <h2 className="font-semibold text-lg lg:text-xl text-center text-black">
              We sell
              <span className="text-C2-default"> everything </span>
              24/7.
              <br />
              You just have to pick.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-white h-full min-h-screen w-full sm:w-11/12 md:w-3/5 lg:w-1/2 overflow-y-auto xl:overflow-y-hidden">
        <div className="flex flex-col justify-center min-h-screen w-full sm:w-9/12 lg:w-3/4 xl:w-8/12">
          <div className="flex flex-col justify-items-center items-center py-2 sm:pb-6 md:py-6 lg:pb-8 xl:pb-10 mt-10 sm:mt-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:pb-3 md:pb-4 lg:pb-8 xl:pb-14">
              Create an account
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Sign up now
            </h3>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col w-full px-5 sm:px-8 lg:px-7 xl:px-6 py-4 lg:my-5">
              {inputsCont.map((el, index) => (
                <div
                  key={index}
                  className="flex pt-2 sm:pt-4 justify-center w-full"
                >
                  <Input
                    label={el.title}
                    placeholder={el.placeholder}
                    error={el.error}
                    errorMessage={el.errorMessage}
                    icon={el.icon}
                    type={el.type}
                    className="rounded-lg flex h-full w-full"
                    classLabel="text-lg font-semibold leading-tight -mb-1 mt-3"
                    classInput={`h-10 px-2 w-full rounded mt-2 focus:outline-none shadow text-gray-700 bg-white ${el.clsInput}`}
                    classInputInside="w-full"
                    {...el.dataProps}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center px-5 sm:px-8 lg:px-7 xl:px-6 mb-8 sm:mb-6 md:mb-4 md:py-2">
              <div className="inline-flex w-full text-sm py-2 items-center self-start">
                <CheckBox
                  className="bg-gray-100 pl-px"
                  checkBg="bg-blue-500 border-C2-B"
                  selected={false}
                />
                <p className="text-xs sm:text-sm md:text-base pl-2">
                  I agree with your{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={policyTos}
                  >
                    ToS
                  </span>{" "}
                  and{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={policyTos}
                  >
                    privacy policy
                  </span>
                  .
                </p>
              </div>
              <Button
                className="w-full bg-white hover:bg-gray-200 text-C2-default sm:px-8 px-2 py-3 text-base"
                content="Sign Up"
                type="submit"
              />
              <div className="pt-7 sm:pt-16 md:pt-8 text-sm md:text-base text-center flex items-center">
                Already have an account?{" "}
                <Route
                  render={({ history }) => (
                    <Button
                      className="md:text-base text-sm w-fit-content hover:shadow-none hover:underline px-2"
                      content="Log In"
                      onClick={() => {
                        history.push("/login");
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Index;
