import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./nav.css";
const Navbar = () => {
  return (
    <div id="nav_container">
      <nav className="navbar navbar-expand-lg navbar-light mx-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="fas fa-hotel"></span> Easy Loan
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
              <Link className="nav-link" to="/signup">
                signup
              </Link>
              <Link className="nav-link" to="/services">
                Services
              </Link>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/apply-for-loan">
                Apply For Loan
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
