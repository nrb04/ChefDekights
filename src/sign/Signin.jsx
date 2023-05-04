import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import "./signup.css";
import { AuthContext } from "../providers/AuthPovider";

const Signin = () => {
  const { googleLogin, githubLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "" || password === "") {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setError(""); // Resetting the error state

    signIn(email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid email or password.");
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div id="regibody">
      <div className="container-fluid px-1 py-5 mx-auto">
        <Row className="d-flex justify-content-center">
          <Col xl={4} lg={4} md={9} col={11} className="text-center">
            <h3>LogIn</h3>
            <div className="card">
              <form onSubmit={handleLogin}>
                {error && <p className="text-danger">{error}</p>}
                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-3">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="forgot-password text-right">
                  not a member{" "}
                  <Link className="nav-link" to="/signup">
                    SignUp
                  </Link>
                </p>
              </form>

              <Button
                onClick={handleGoogleLogin}
                className="btn btn-primary my-4"
                type="submit"
              >
                Google Login
              </Button>
              <Button
                onClick={handleGithubLogin}
                className="btn btn-primary"
                type="submit"
              >
                Github Login
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signin;
