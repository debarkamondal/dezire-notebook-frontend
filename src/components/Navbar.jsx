import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            DezireNotebook
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
            {localStorage.getItem("authToken") ? (
              <NavLink
                to="/login"
                onClick={handleClick}
                className="btn btn-primary"
                role="button"
              >
                Log out
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={`btn btn-primary ${
                    location.pathname === "/login" ? "d-none" : "d-block"
                  }`}
                  role="button"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/signup"
                  className={`btn btn-primary ${
                    location.pathname === "/signup" ? "d-none" : "d-block"
                  }`}
                  role="button"
                >
                  Sign up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
