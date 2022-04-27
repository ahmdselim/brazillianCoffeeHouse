import React from "react";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import AddProduct from "../../../Components/Admin/AddProduct/AddProduct";
import "./style.css";
const AddProductPage = () => {
  return (
    <div className="container">
      <Head />
      <AddProduct />
      <Footer />
    </div>
  );
};

export default AddProductPage;
