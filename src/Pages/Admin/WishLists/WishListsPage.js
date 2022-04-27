import React from "react";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import WishLists from "../../../Components/Admin/WishLists/WishLists";
import "./style.css";
const WishListsPage = () => {
  return (
    <div className="container">
      <Head />
      <WishLists />
      <Footer />
    </div>
  );
};

export default WishListsPage;
