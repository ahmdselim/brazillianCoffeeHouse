import React from "react";
import WishList from "../../../Components/CheckOut/wishlist/wishlist";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import "../Cart/Style.css";

const wishListPage = () => {
  return (
    <div className="container">
      <Head />
      <WishList />
      <Footer />
    </div>
  );
};

export default wishListPage;
