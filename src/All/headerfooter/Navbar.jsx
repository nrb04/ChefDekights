import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-3 mx-lg-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <span className="fas fa-hotel"></span> Chef Delights
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-bar"
              aria-controls="navbar-bar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-bar">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/signin">
                  SignIn
                </Link>
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>

                <Link className="nav-link" to="/apply-for-loan">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
