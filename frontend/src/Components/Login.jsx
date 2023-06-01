import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginStyles from "../Styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/authSlice";

const Login = () => {
  const [details, setDetails] = useState({
    username: null,
    password: null,
  });

  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };

  useEffect(() => {
    if (user && isLoggedIn) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/users/login", {
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

      dispatch(login(result.username));
      localStorage.setItem("token", result.token);
      alert(`User Logged In!`);

      navigate("/");
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

            if (!details.username || !details.password) {
              alert("Please fill all the details");
            } else {
              handleLogin();
            }
          }}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              name="username"
              onChange={handleChange}
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
              onChange={handleChange}
              name="password"
              type="password"
              className={`form-control ${loginStyles.textInputs}`}
              id="password"
            />
          </div>
          <p>
            <Link to={`/register`}>Register</Link>
          </p>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
