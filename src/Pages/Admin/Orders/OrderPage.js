import React from "react";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import Orders from "../../../Components/Admin/Orders/Orders";
import "./style.css";
const OrderPage = () => {
  return (
    <div className="container">
      <Head />
      <Orders />
      <Footer />
    </div>
  );
};

export default OrderPage;
