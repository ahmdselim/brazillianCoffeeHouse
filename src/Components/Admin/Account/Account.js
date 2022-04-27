import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../../../Firebase/config";

const Account = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const users = useSelector((state) => state.ProductsReducer.users);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/");
  }, [user, loading, navigate]);
  return (
    <div className="account">
      <Sidebar />
      <div className="MyAccount">
        <h2>My Account</h2>
        <p>Account Information</p>
        <hr />
        {users &&
          users.map((user) => (
            <>
              <div className="contactInfo">
                <div className="info">
                  <h4>Contact Information</h4>
                  <p>{user.data.name}</p>
                  <p>{user.data.email}</p>
                  <button>Edit</button>
                  <button>Change Password</button>
                </div>
              </div>
              <div className="addressBook">
                <h2>Address Book</h2>
                <hr />
                <h4>Default Shipping Address</h4>
                <p>{user.data.address}</p>
                <p>{user.data.city}</p>
                <p>{user.data.country}</p>
                <p>{user.data.company}</p>
                <p>{user.data.companySite}</p>
                <p>{user.data.state}</p>
                <p>{user.data.zip}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Account;
