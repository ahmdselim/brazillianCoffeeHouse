import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeAdmin, getUsers } from "../../../redux/actions/actions";
import { auth } from "../../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar";
const Users = () => {
  const users = useSelector((state) => state.ProductsReducer.users);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(true);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const updateUser = (id) => {
    setAdmin(!admin);
    makeAdmin(id, admin);
    getUsers(dispatch);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/");
    if (users && users.map((user) => user.data.rank).join() !== "1")
      navigate("/");
  }, [user, users, loading, navigate]);

  return (
    <>
      <div className="account">
        <Sidebar />
        <div className="cartPage">
          <h2 style={{ marginBottom: "20px" }}>Users</h2>
          <div className="cartContent">
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>email </th>
                  <th>rank</th>
                  <th>make admin</th>
                </tr>
              </thead>
              {users &&
                users.map((user, i) => (
                  <tbody key={i}>
                    <tr className="itemInfo">
                      <td className="item">
                        <strong>{user.data.name}</strong>
                      </td>
                      <td className="price">
                        <span>{user.data.email}</span>
                      </td>
                      <td className="item">
                        {user.data.rank === "1" ? "Admin" : "Member"}
                      </td>
                      {users &&
                      users.map((user) => user.data.rank).join() === "1" ? (
                        <td className="subtotal_users">
                          <div className="switch_box box_1">
                            <input
                              type="checkbox"
                              className="switch_1"
                              checked={user.data.rank === "1" ? true : false}
                              onChange={() => updateUser(user.id)}
                            />
                          </div>
                        </td>
                      ) : (
                        navigate("/")
                      )}
                    </tr>

                    <tr></tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
