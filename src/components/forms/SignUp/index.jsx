import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { SIGN_UP_USER_SCHEMA } from "../../../utils/validationSchemas";
import InputWrapper from "../InputWrapper";
import InputRadio from "../InputRadio";
import style from "./SignUp.module.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  picked: "",
};

const SignUp = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SIGN_UP_USER_SCHEMA}
      >
        <Form className={style.form}>
          <p> We always keep your name and email adsreaa private</p>
          <InputWrapper
            type="firstName"
            name="firstName"
            placeholder="First name"
          />
          <InputWrapper
            type="lastName"
            name="lastName"
            placeholder="Last name"
          />
          <InputWrapper
            type="displayName"
            name="displayName"
            placeholder="Display name"
          />
          <InputWrapper type="email" name="email" placeholder="Email address" />
          <InputWrapper
            type="password"
            name="password"
            placeholder="Password"
          />

          <InputWrapper
            type="password"
            name="confirmPassword"
            placeholder="Password confirmation"
          />
            <InputRadio
              type="radio"
              name="picked"
              value="buyer"
              title="Join as a buyer"
              text="I am looking for a name, logo or tagline for my business, brand or product."
          />
          <span className={style.wrapperError}>
            <ErrorMessage
              component="div"
              name="picked"
              className={style.error}
            /></span>
            <InputRadio
              type="radio"
              name="picked"
              value="seller"
              title="Join as a creative or market place seller"
              text="I plan to submit name ideas, Logo designs or sell names in Domain Marketplaces"
            />
          <button type="submit" value="send">
            Create account
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
