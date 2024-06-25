import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
const Login = () => {
  const navigate = useNavigate();
  const { navbarHeight, footerHeight } = useScreenSize();
  const [flag, setFlag] = useState(false);
  const [success, setIsSuccess] = useState(false);
  const [loginSuccess, setIsLoginSuccess] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [signUpErrors, setSignUpErrors] = useState({});

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    passwordRenter: "",
  });

  const handleLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const loginBtn = (e) => {
    e.preventDefault();
    let successTimeOut;
    let redirection;
    setIsLoginSuccess(false);
    clearTimeout(redirection);
    clearTimeout(successTimeOut);
    const { email, password } = login;
    if (email && password) {
      setLogin({
        email: "",
        password: "",
      });
      setIsLoginSuccess(true);
      setFormErrors({});
      successTimeOut = setTimeout(() => {
        setIsLoginSuccess(false);
      }, 6000);
      redirection = setTimeout(() => {
        navigate("/reservations");
      }, 4600);
    } else {
      handleFormErrors();
    }
  };
  const handleFormErrors = () => setFormErrors(() => validateForm(login));

  const signUpBtn = (e) => {
    e.preventDefault();
    let successTimeOut;
    let setFlagTime;
    clearTimeout(successTimeOut);
    clearTimeout(setFlagTime);
    setIsSuccess(false);
    const { email, password, passwordRenter } = signUp;
    if (email && password && passwordRenter) {
      setSignUp({
        email: "",
        password: "",
        passwordRenter: "",
      });
      setIsSuccess(true);
      setSignUpErrors({});
      successTimeOut = setTimeout(() => {
        setIsSuccess(false);
      }, 6000);

      setFlagTime = setTimeout(() => {
        setFlag(false);
      }, 4000);
    } else {
      setSignUpErrors(validateForm(signUp));
    }
  };

  const formFlag = () => {
    setFlag(!flag);
  };

  const validateForm = (obj) => {
    let errors = {};
    if (!obj.email) {
      errors.email = "Email is Required";
    }
    if (!obj.password) {
      errors.password = "Password is Required";
    }
    if (!obj.passwordRenter) {
      errors.passwordRenter = "Renter Password";
    }

    return errors;
  };

  return (
    <div
      className="login-container"
      style={{ minHeight: `calc(100vh - ${navbarHeight + footerHeight}px)` }}
    >
      {success && <Success type={"Sign Up"} page={"Login"} />}
      {loginSuccess && <Success type={"Log-In"} page={"Reservations"} />}
      {flag ? (
        <SignUp
          handleSignUp={handleSignUp}
          signUpBtn={signUpBtn}
          formFlag={formFlag}
          signUp={signUp}
          signUpErrors={signUpErrors}
        />
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          loginBtn={loginBtn}
          formFlag={formFlag}
          {...login}
          formErrors={formErrors}
        />
      )}
    </div>
  );
};

export default Login;

const LoginForm = ({
  handleLogin,
  loginBtn,
  formFlag,
  email,
  password,
  formErrors,
}) => {
  return (
    <>
      <form className="login-form">
        <header>
          <h2 className="login-h2">SIGN-IN</h2>
          <p className="login-para-please-enter">
            Please enter your login and password!
          </p>
        </header>
        <div className="login-input-container">
          <div className="login-form-email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleLogin}
            />
            <p className="form-errors-class">{formErrors.email || "\u00A0"}</p>
          </div>
          <div className="login-form-password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleLogin}
            />
            <p className="form-errors-class">
              {formErrors.password || "\u00A0"}
            </p>
          </div>
          <p className="login-forgot-password">Forgot Password ?</p>
        </div>

        <div className="login-form-btn-container">
          <button className="reserve_btn login-btn" onClick={loginBtn}>
            Login
          </button>
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
            Don't have an account?{" "}
            <span className="Sign-up-span" onClick={formFlag}>
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

const SignUp = ({
  handleSignUp,
  formFlag,
  signUpBtn,
  signUp,
  signUpErrors,
}) => {
  return (
    <>
      <form className="login-form">
        <header>
          <h2 className="login-h2">SIGN-UP</h2>
          <p className="login-para-please-enter">
            Please enter your Details To SignUp!
          </p>
        </header>
        <div className="login-input-container">
          <div className="login-form-email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={signUp.email}
              onChange={handleSignUp}
            />
            <p className="form-errors-class">
              {signUpErrors.email || "\u00A0"}
            </p>
          </div>
          <div className="login-form-password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signUp.password}
              onChange={handleSignUp}
            />
            <p className="form-errors-class">
              {signUpErrors.password || "\u00A0"}
            </p>
          </div>
          <div className="login-form-password">
            <input
              type="password"
              placeholder="Renter-Password"
              name="passwordRenter"
              value={signUp.passwordRenter}
              onChange={handleSignUp}
            />
            <p className="form-errors-class">
              {signUpErrors.passwordRenter || "\u00A0"}
            </p>
          </div>
        </div>

        <div className="login-form-btn-container">
          <button className="reserve_btn login-btn" onClick={signUpBtn}>
            Sign Up
          </button>
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
            Do you have an account?{" "}
            <span className="Sign-up-span" onClick={formFlag}>
              {" "}
              Sign In
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

const Success = ({ type, page }) => {
  return (
    <article className="success-card">
      <section>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <h1>{type} Successful</h1>
        <h2>Redirecting to {page} page... </h2>
      </section>
    </article>
  );
};
