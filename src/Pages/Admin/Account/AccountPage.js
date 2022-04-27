import React from "react";
import Account from "../../../Components/Admin/Account/Account";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import "./style.css";

const AccountPage = () => {
  return (
    <div className="container">
      <Head />
      <Account />
      <Footer />
    </div>
  );
};

export default AccountPage;
