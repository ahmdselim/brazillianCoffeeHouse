import React from "react";
import Content from "../../Components/Home/Content";
import Head from "../../Components/Home/Head";
import Footer from "../../Components/Home/footer";
import "./Style.css";
const homePage = () => {
  return (
    <div className="container">
      <Head />
      <Content />
      <Footer />
    </div>
  );
};

export default homePage;
