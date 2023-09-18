import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.scss"


const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={style.header}>
      <Link to="./">
        <img src="/logo.png" />
      </Link>

      {pathname === "/sign-in" ? (
        <Link to="/sign-up">
          <button>SignUp</button>
        </Link>
      ) : (
        <Link to="/sign-in">
          <button>Login</button>
        </Link>
      )}
    </header>
  );
};


Header.propTypes = {};


export default Header;
