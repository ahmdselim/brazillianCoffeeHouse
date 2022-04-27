import React from "react";
import Products from "../../Components/Products/Products";
import Head from "../../Components/Home/Head";
import Footer from "../../Components/Home/footer";
import "./style.css";

const productsPage = () => {
  return (
    <div className="container">
      <Head />
      <Products />
      <Footer />
    </div>
  );
};

export default productsPage;
