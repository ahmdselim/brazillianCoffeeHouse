import React from "react";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import Users from "../../../Components/Admin/Users/Users";
import "./style.css";
const UsersPage = () => {
  return (
    <div className="container">
      <Head />
      <Users />
      <Footer />
    </div>
  );
};

export default UsersPage;
