import React from "react";
import "../../Pages/Admin/Account/style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/account">
          <li>My Accounts</li>
        </Link>
        <Link to="/orders">
          <li>My Orders</li>
        </Link>
        <Link to="/wishlists">
          <li>Save For Later</li>
        </Link>
        <hr />
        <Link to="/editInfo">
          <li>Account Information</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <hr />
        <Link to="/addProduct">
          <li>Add product</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
