import React from "react";
import Contact from "../../Components/Contact/Contact";
import Head from "../../Components/Home/Head";
import Footer from "../../Components/Home/footer";

import "./style.css";
const contactPage = () => {
  return (
    <div className="container">
      <Head />
      <Contact />
      <Footer />
    </div>
  );
};

export default contactPage;
