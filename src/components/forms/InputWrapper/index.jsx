import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {ErrorMessage, Field } from 'formik';
import styles from "./../InputWrapper/InputWrapper.module.scss"

const InputWrapper = ({ type, name, placeholder, ...options }) => {
  
  return (
    <span>
      <Field name={name}>
        {({ field, meta }) => {
          const classNames = cx(styles.input, {
            [styles.invalid]: meta.touched && meta.error,
          });
            return (
              <input
                type={type}
                placeholder={placeholder}
                {...field}
                className={classNames}
              />
            );
        }}
      </Field>

      <ErrorMessage component="span" name={name} className={styles.error} />
    </span>
  );
};

InputWrapper.defaultProps = {
  type: "text",
  name: "text",
};

InputWrapper.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputWrapper;
