import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./InputRadio.module.scss";

const InputRadio = ({ type, name, value, title, text }) => {
  return (
    <label className={styles.label}>
      <Field name={name} type={type} value={value}>
        {({ field, meta }) => {
          const classNames = cx(styles.inputRadio, {
            [styles.invalid]: meta.touched && meta.error,
          });
          return <input type={type} {...field} className={classNames} />;
        }}
      </Field>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </label>
  );
};

InputRadio.propTypes = {};

export default InputRadio;
