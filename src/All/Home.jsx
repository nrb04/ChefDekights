import React, { useEffect } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "./home.css";
const Home = () => {
  return (
    <div className="banner_section layout_padding">
      <Container className="banner_container ">
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col md={6}>
                <div className="banner_img">
                  <img
                    src="images/banner1.png"
                    alt="Banner Image"
                    className="my-4 img-fluid"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="banner_taital_main">
                  <h1 className="banner_taital">Food you love</h1>
                  <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                  <p className="banner_text">
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
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={6}>
                <div className="banner_img">
                  <img
                    src="images/banner2.png"
                    alt="Banner Image"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="banner_taital_main">
                  <h1 className="banner_taital">Chef in your service </h1>
                  <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                  <p className="banner_text">
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
            </Row>
          </Carousel.Item>
          {/* Add other carousel items here */}
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
