import React from "react";

import "./blog.css";
const Blog = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card " style={{ maxWidth: "960px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
