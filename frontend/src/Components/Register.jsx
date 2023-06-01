import React from "react";
import { Link } from "react-router-dom";
import loginStyles from "../Styles/login.module.css";

const Register = () => {
  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${loginStyles.mainDiv}`}
      >
        <form className={`col-sm-5 col-10 p-5 ${loginStyles.formDiv}`}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${loginStyles.textInputs}`}
              id="username"
              aria-describedby="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${loginStyles.textInputs}`}
              id="password"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control ${loginStyles.textInputs}`}
              id="confirmPassword"
            />
          </div>
          <p>
            <Link>Register</Link>
          </p>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
