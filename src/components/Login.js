import React, { useState } from "react";

const Login = () => {
  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
};

export default Login;

const LoginForm = () => {
  return (
    <>
      <form className="login-form">
        <header>
          {/* <h2 className="login-h2">LOG-IN</h2> */}
          <h2 className="login-h2">SIGN-IN</h2>
          <p className="login-para-please-enter">
            Please enter your login and password!
          </p>
        </header>
        <div className="login-input-container">
          <div className="login-form-email">
            <input type="text" placeholder="Email" />
          </div>
          <div className="login-form-password">
            <input type="password" placeholder="Password" />
          </div>
          <p className="login-forgot-password">Forgot Password ?</p>
        </div>

        <div className="login-form-btn-container">
          <button className="reserve_btn login-btn">Login</button>
          <div className="login-with-other">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-google"></i>
            </span>
          </div>
        </div>

        <div className="login-form-no-account">
          <p>
            Don't have an account? <span className="Sign-up-span">Sign Up</span>
          </p>
        </div>
      </form>
    </>
  );
};
