import React from "react";
import Product from "../../Components/Product/Product";
import Head from "../../Components/Home/Head";
import Footer from "../../Components/Home/footer";
import "./style.css";
const productPage = () => {
  return (
    <div className="container">
      <Head />
      <Product />
      <Footer />
    </div>
  );
};

export default productPage;
