import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginStyles from "../Styles/login.module.css";

const Register = () => {
  const [details, setDetails] = useState({
    username: null,
    password: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: details.username,
          password: details.password,
        }),
      });

      const result = await res.json();

      if (!result.isSuccess) {
        throw new Error(result.error);
      }

      alert("User Registered!");

      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${loginStyles.mainDiv}`}
      >
        <form
          className={`col-sm-5 col-10 p-5 ${loginStyles.formDiv}`}
          onSubmit={(e) => {
            e.preventDefault();

            if (details.password !== details.confirmPassword) {
              alert("Passwords do not match");
            } else if (
              !details.username ||
              !details.password ||
              !details.confirmPassword
            ) {
              alert("Please fill all the details");
            } else {
              handleRegister();
            }
          }}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              onChange={handleChange}
              name="username"
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
              name="password"
              onChange={handleChange}
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
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              className={`form-control ${loginStyles.textInputs}`}
              id="confirmPassword"
            />
          </div>
          <p>
            <Link to={`/login`}>Login</Link>
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
