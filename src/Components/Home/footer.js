import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>Site Pages</h3>
          <ul>
            <li>
              <Link className="link" to="/origins">
                Origins
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li>Origins</li>
          </ul>
        </div>
        <div>
          <h3>Contact US</h3>
          <ul className="socialIcons">
            <li>
              <IoLogoFacebook />
            </li>
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <IoLogoTwitter />
            </li>
          </ul>
        </div>
        <div>
          <span style={{ marginBottom: "10px" }}>
            <AiOutlineMail style={{ marginRight: "10px" }} />
            customerservice-osc@olamnet.com
          </span>
          <span>
            <AiFillPhone style={{ marginRight: "10px" }} /> 01200659086
          </span>
        </div>
      </div>
      <div style={{ background: "#eae8e7", textAlign: "center" }}>
        <div>
          <p style={{ marginBottom: "10px" }}>
            <strong>Get the latest</strong> on our new green coffees
          </p>
          <input type="text" style={{ padding: "9px", marginBottom: "15px" }} />
          <button className="btn">join newsletter</button>
        </div>
        <p>&copy; 2022 Olam International All Rights Reserved Co.</p>
      </div>
    </>
  );
};

export default footer;
