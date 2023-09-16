import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./../InputWrapper/InputWrapper.module.scss";

const InputRadio = ({ type, name, value, title, text }) => {
  return (
    <label>
      <Field name={name} type={type} value={value}></Field>
      <h3>{title}</h3>
      <p>{text}</p>
    </label>
  )
};

InputRadio.propTypes = {};

export default InputRadio;
