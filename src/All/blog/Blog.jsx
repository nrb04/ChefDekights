/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./blog.css";
const Blog = () => {
  return (
    <div className="">
      <Container>
        <li>
          Tell us the differences between uncontrolled and controlled
          components.
          <br />
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally
        </li>
        <li>
          How to validate React props using PropTypes
          <br />
          propTypes is used for props validation. If some of the props aren't
          using the correct type that we assigned, we will get a console
          warning. After we specify validation patterns, we will set App.
          defaultProps.
        </li>
        <li>
          Tell us the difference between nodejs and express js.
          <br />
          Node.js is a JavaScript runtime that allows developers to use
          JavaScript on the server-side. It provides an execution environment
          for JavaScript that is independent of the web browser, and allows for
          high-speed, scalable network applications. Express.js, on the other
          hand, is a web application framework that runs on top of Node.js. It
          provides developers with a set of tools for building web applications,
          including routing, middleware handling, and template engine
          integration.
        </li>
        <li>
          What is a custom hook, and why will you create a custom hook?
          <br />A custom hook is a reusable JavaScript function that allows a
          developer to extract component logic into a separate function that can
          be shared across multiple components in a React application. Custom
          hooks start with the prefix use, and can call other built-in hooks or
          other custom hooks. Developers will create custom hooks in order to
          promote code reusability and make their code more modular. By
          extracting commonly used component logic into a custom hook,
          developers can reduce the amount of boilerplate code in their
          components and simplify maintenance of the codebase.
        </li>
      </Container>
    </div>
  );
};

export default Blog;
