import React from "react";
import Head from "../../../Components/Home/Head";
import Footer from "../../../Components/Home/footer";
import EditAccount from "../../../Components/Admin/EditAccount/EditAccount";
import "./style.css";
const EditAccountPage = () => {
  return (
    <div className="container">
      <Head />
      <EditAccount />
      <Footer />
    </div>
  );
};

export default EditAccountPage;
