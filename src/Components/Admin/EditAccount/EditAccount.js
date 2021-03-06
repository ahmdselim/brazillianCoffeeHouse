import React from "react";
import { useSelector } from "react-redux";

import Sidebar from "../Sidebar";
const EditAccount = () => {
  const users = useSelector((state) => state.ProductsReducer.users);

  return (
    <>
      <div className="account">
        <Sidebar />
        <div className="accountInf">
          <h1>Edit Account Information</h1>
          <h2>Account Information</h2>
          <hr />
          {users &&
            users.map((user) => (
              <form>
                <label>Email *</label>
                <input type="text" defaultValue={user.data.email} />
                <label>Password*</label>
                <input type="password" defaultValue={user.data.password} />
                <button>save</button>
              </form>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditAccount;
