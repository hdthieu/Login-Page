import React from "react";
import "./Login.css"; // Import file CSS
import logo from "/Users/minhkhoi/Downloads/CheckListBuild/CheckListBuild_FE/checklistbuild_fe/src/assets/Logo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <label className="input-label">Username</label>
        <input type="text" className="input-field" />
        <label className="input-label">Password</label>
        <input type="password" className="input-field" />
        <button className="login-button">Login</button>
        <div className="login-links">
          <a href="#" className="link">
            Don't have an account? Register
          </a>
          <a href="#" className="link">
            Forgot password?
          </a>
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
    </div>
  );
};

export default Login;
