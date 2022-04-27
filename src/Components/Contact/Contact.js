import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <div className="contactHead">
          <div className="overlay"></div>
          <h2>Contact US</h2>
        </div>
        <div className="contactMain">
          <div className="contactInfoL">
            <h3>Office Contact Info</h3>
            <ul>
              <li>
                <h4>Olam Specialty Coffee RI</h4>
                <p class="address">
                  292 Westminster St., 4th Floor
                  <br />
                  Providence, RI 02903
                </p>
                <p class="tel">
                  Direct Line: &nbsp;
                  <a href="tel:+1%20(914)%20920-2710">+1 (914) 920-2710</a>
                </p>
              </li>
              <li>
                <h4>Olam Specialty Coffee CA</h4>
                <p class="address">
                  118 Matheson st. 3rd Floor <br />
                  Habsburg, CA 95448
                </p>
                <p class="tel">
                  Direct Line: &nbsp;
                  <a href="tel:+1%20(707)%20431-9500">+1 (707) 431-9500</a>
                </p>
              </li>
              <li>
                <h4>Olam Specialty Coffee Europe</h4>
                <p class="address">
                  Unit 9, The Patchworks <br />
                  140 Spake Road <br />
                  Liverpool, L19 2PH, UK
                </p>
                <p class="tel">
                  T: &nbsp;
                  <a href="tel:+44%20(0)%20151%20498%206500">
                    +44 (0) 151 498 6500
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="contactInfoR">
            <h3>Have a Question?</h3>
            <div className="main">
              <p>
                Try searching our Knowledge Base of support articles! If you
                can't find what you're looking for, feel free to send us an
                email at
                <strong>
                  <a href="mailto:CustomerService-OSC@olamnet.com">
                    CustomerService-OSC@olamnet.com
                  </a>
                </strong>
                or give us a call at (914) 920-2710 (dial "1" for Customer
                Service).&nbsp;
              </p>
              <button>KNOWLEDGE BASE</button>
            </div>
            <ul>
              <li>
                Get to know us on <a href="/">FACEBOOK</a>
              </li>
                <li>
                  Follow us on <a href="/">TWITTER</a>
                </li>
                <li>
                  Check us out on <a href="/">INSTAGRAM</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
