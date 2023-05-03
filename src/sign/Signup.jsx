import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./signup.css";
const Signup = () => {
  return (
    <div id="regibody">
      <div className="container-fluid px-1 py-5 mx-auto">
        <Row className="d-flex justify-content-center">
          <Col xl={7} lg={8} md={9} col={11} className="text-center">
            <h3>REGISTRATION</h3>
            <p className="blue-text">
              Just answer a few questions
              <br />
              so that we can personalize the right experience for you.
            </p>
            <div className="card">
              <h5 className="text-center mb-4">
                Powering world-class companies
              </h5>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
