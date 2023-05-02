import React from "react";
import Navbar from "./headerfooter/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./headerfooter/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
