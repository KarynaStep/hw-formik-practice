import * as Yup from "yup";

const EMAIL_SCHEMA = Yup.string("Value must be string")
  .trim()
  .required("Required!")
  .email()
  .min(4, "Min length must 4")
  .max(64, "Max length must 64");

const PASSWORD_SCHEMA = Yup.string("Value must be string")
  .trim()
  .required("Required!")
  .matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,30}$/,
    "The password must contain: a capital letter, a number, a minimum number of characters 4, a maximum number of characters 30"
  );

const NAME_SCHEMA = Yup.string("Value must be string")
  .trim()
  .required("Required!")
  .matches(/^[A-Z][a-z]{1,31}$/);
  
  export const SIGN_UP_USER_SCHEMA = Yup.object({
    firstName: NAME_SCHEMA,
    lastName: NAME_SCHEMA,
    displayName: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    password: PASSWORD_SCHEMA,
    confirmPassword: PASSWORD_SCHEMA.oneOf(
      [Yup.ref("password")],
      "Passwords are not repeated"
    ),
    picked: Yup.string().required("Select one value")
  });

  export const SIGN_IN_USER_SCHEMA = Yup.object({
    email: EMAIL_SCHEMA,
    password: PASSWORD_SCHEMA,
  });