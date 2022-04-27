import React from "react";
import Cart from "../../../Components/CheckOut/Cart/Cart";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";

import "./Style.css";

const cartHome = () => {
  return (
    <div className="container">
      <Head />
      <Cart />
      <Footer />
    </div>
  );
};

export default cartHome;
