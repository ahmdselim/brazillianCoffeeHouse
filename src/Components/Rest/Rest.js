import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../Firebase/config";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);
  const restPassword = (e) => {
    e.preventDefault();
    sendPasswordReset(email);
  };

  return (
    <>
      <div className="loginContent">
        <h2>Forgot Your Password?</h2>
        <ul className="mainDiv">
          <li className="register">
            <h4>Reset Password</h4>
            <hr />
            <p>
              Please enter your email address below to receive a password reset
              link.
            </p>
            <form onSubmit={(e) => restPassword(e)}>
              <label> Email *</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <button className="restBtn">
                <span>RESET MY PASSWORD</span>
              </button>
            </form>
            <p> * REQUIRED FIELDS</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Reset;
