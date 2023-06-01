import React from "react";
import { Link, NavLink } from "react-router-dom";
import navStyles from "../Styles/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold" href="#">
            The Book Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink
                className={`nav-link ${navStyles.navLink}`}
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink
                className={`nav-link ${navStyles.navLink}`}
                to={`/books`}
              >
                Books
              </NavLink>

              {!isLoggedIn ? (
                <NavLink
                  to={`/login`}
                  className={`nav-link ${navStyles.navLink}`}
                >
                  Login
                </NavLink>
              ) : (
                <Link
                  onClick={() => dispatch(logout())}
                  className={`nav-link ${navStyles.navLink}`}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
