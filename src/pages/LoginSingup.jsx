import React from "react";
import "./css/loginsignup.css";

const LoginSingup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignupContainer">
        <h1>Sign Up</h1>
        <div className="inputField">
          <input type="text" placeholder="enter your name" className="input" />
          <input
            type="email"
            placeholder="enter your email"
            className="input"
          />
          <input
            type="password"
            placeholder="enter your password"
            className="input"
          />
        </div>
        <button className="btn">Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to use the tearms and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
