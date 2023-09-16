import React from 'react';
import { Form, Formik } from "formik";
import { SIGN_IN_USER_SCHEMA } from "../../../utils/validationSchemas";
import InputWrapper from '../InputWrapper';
import style from "./SignIn.module.scss"

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SIGN_IN_USER_SCHEMA}
      >
        <Form className={style.form}>
          <InputWrapper type="email" name="email" placeholder="Email address" />
          <InputWrapper
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" value="send">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
