import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./blog.css";
const Blog = () => {
  return (
    <div id="cara" className="container d-flex justify-content-center">
      <Carousel className="">
        <Carousel.Item>
          <div className="row ">
            <div className="col-md-6">
              <img
                src="https://as1.ftcdn.net/v2/jpg/04/26/98/00/1000_F_426980001_M82CoqxTS9VjWfxcwn7NqPGhrKoaQf0d.jpg"
                className="w-75 float-right"
                alt="..."
              />
            </div>
            <Col md={6}>
              <div className="">
                <h1 className="">Food you love</h1>
                <h5 className="">Tasty Of DozeCafe</h5>
                <p className="">
                  more-or-less normal distribution of letters, as opposed to
                  using
                </p>
                <div className="btn_main">
                  <div className="about_bt">
                    <Button variant="primary">About Us</Button>
                  </div>
                  <div className="callnow_bt active">
                    <Button variant="primary">Call Now</Button>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row ">
            <Col md={6}>
              <div className=" d-flex justify-content-center">
                <h1 className="text-right">bal ta khabi</h1>
                <h5 className="text-left">Tasty Of DozeCafe</h5>
                <p className="">
                  more-or-less normal distribution of letters, as opposed to
                  using
                </p>
                <div className="btn_main">
                  <div className="about_bt">
                    <Button variant="primary">About Us</Button>
                  </div>
                  <div className="callnow_bt active">
                    <Button variant="primary">Call Now</Button>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-md-6">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/27/59/11/1000_F_327591184_VP4qzhqDTUDI85vkNTlg5c0M0DI1uWvG.jpg"
                className="w-75 float-right"
                alt="..."
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Blog;
