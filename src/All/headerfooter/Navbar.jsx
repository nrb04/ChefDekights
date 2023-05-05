import React, { useContext } from "react";
import { Button, Nav, Image } from "react-bootstrap";
import { SiCodechef } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthPovider";
// import { FcBusinessman } from "react-icons/fc";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-3 mx-lg-5">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <span className="fal fa-hat-chef">
              <SiCodechef />
            </span>{" "}
            Chef Delights
          </NavLink>
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
            <Nav className="navbar-nav ms-auto">
              <NavLink
                exact
                className="nav-link"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
              {user && (
                // eslint-disable-next-line react/jsx-no-undef
                <Image
                  className="me-2"
                  style={{ height: "40px" }}
                  title={user?.displayName}
                  src={user.photoURL}
                  roundedCircle
                />
              )}

              {user ? (
                <NavLink
                  onClick={handleLogout}
                  className="nav-link"
                  to="/"
                  activeClassName="active"
                >
                  Logout
                </NavLink>
              ) : (
                <>
                  <NavLink
                    className="nav-link"
                    to="/signin"
                    activeClassName="active"
                  >
                    SignIn
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/signup"
                    activeClassName="active"
                  >
                    SignUp
                  </NavLink>
                </>
              )}
              <NavLink className="nav-link" to="/blog" activeClassName="active">
                Blog
              </NavLink>
              <NavLink
                className="nav-link"
                to="/apply-for-loan"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
