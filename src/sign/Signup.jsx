import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./signup.css";

const Signup = () => {
  return (
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
            <h5 className="text-center mb-4">Powering world-class companies</h5>
            <Form className="form-card" onSubmit={(e) => e.preventDefault()}>
              <Row className="justify-content-between text-left">
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">
                    First name<span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your first name"
                    onBlur={() => validate(1)}
                  />
                </Col>
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">
                    Last name<span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                    onBlur={() => validate(2)}
                  />
                </Col>
              </Row>
              <Row className="justify-content-between text-left">
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">
                    Business email<span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    onBlur={() => validate(3)}
                  />
                </Col>
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">
                    Phone number<span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder=""
                    onBlur={() => validate(4)}
                  />
                </Col>
              </Row>
              <Row className="justify-content-between text-left">
                <Col sm={6} className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">
                    Job title<span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="job"
                    name="job"
                    placeholder=""
                    onBlur={() => validate(5)}
                  />
                </Col>
              </Row>
              <Row className="justify-content-between text-left">
                <Col className="flex-column d-flex">
                  <Form.Label className="form-control-label px-3">
                    What would you be using Flinks for?
                    <span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    onBlur={() => validate(6)}
                  />
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Col sm={6}>
                  <Button type="submit" className="btn-block btn-primary">
                    Request a demo
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
