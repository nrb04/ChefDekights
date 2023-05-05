import React from "react";
import LazyLoad from "react-lazyload";
import "./ourshop.css";
import "animate.css";
const OurShop = () => {
  return (
    <div>
      <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 offset-md-1">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About <br />
                    Our <br />
                    Food
                  </h2>
                  <hr />
                </div>
                <p>
                  There are many variations of passages but here actually show
                  to lazy load. i try to give my best to this image will lazy
                  and she will be loading .. dont worry she will load
                </p>
                <button className="btn btn-rounded btn-danger">for more</button>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <LazyLoad>
                <div className="img-box">
                  <img src="/images/about-img.jpg" alt="" />
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurShop;
