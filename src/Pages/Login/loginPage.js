import React from "react";
import Login from "../../Components/Login/Login";
import Head from "../../Components/Home/Head";
import Footer from "../../Components/Home/footer";

import "./style.css";
const loginPage = () => {
  return (
    <div className="container">
      <Head />
      <Login />
      <Footer />
    </div>
  );
};

export default loginPage;
