import React from "react";
import Signup from "../../Components/Signup/Signup";
import Head from "../../Components/Home/Head";
import Footer from "../../Components/Home/footer";

import "./style.css";
const signupPage = () => {
  return (
    <div className="container">
      <Head />
      <Signup />
      <Footer />
    </div>
  );
};

export default signupPage;
