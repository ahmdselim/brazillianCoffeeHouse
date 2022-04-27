import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInUserAction = (email, password) =>
    loginUser(email, password, dispatch);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);
  const login = (e) => {
    e.preventDefault();
    logInUserAction(email, password);
  };
  return (
    <>
      <div className="loginContent">
        <h2>Customer Login</h2>
        <ul className="mainDiv">
          <li className="register">
            <h4>Registered Customers</h4>
            <hr />
            <p>If you have an account, sign in with your email address.</p>
            <form onSubmit={login}>
              <label> Email *</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <label>Password *</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button>
                <span>LOG IN</span>
              </button>
            </form>

            <Link to="/reset">Forgot Your Password?</Link>

            <p> * REQUIRED FIELDS</p>
          </li>
          <li className="notes">
            <h4>New Customers</h4>
            <hr />
            <ul>
              <h3>Account Benefits</h3>
              <li>
                <h4>View Live Pricing</h4>
                <p>
                  Access real-time custom pricing for our full catalog, 24/7
                </p>
              </li>
              <li>
                <h4>Request Samples</h4>
                <p>Add Credit Cards or sign up for Credit Key financing</p>
              </li>
              <li>
                <h4>Order Online</h4>
                <p>Select your coffees, build a cart, and place your order</p>
              </li>
              <li>
                <h4>Add Credit Cards or sign up for Credit Key financing</h4>
                <p>
                  Pay with credit card or get instantly approved for third-party
                  financing
                </p>
              </li>
            </ul>
            <Link to="/signup">
              <button>CREATE AN ACCOUNT</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Login;
