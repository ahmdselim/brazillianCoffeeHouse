import { useEffect, Fragment, useState } from "react";
import { auth } from "../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/actions";

const Signup = () => {
  const styleLink1 = { color: "#62810e", padding: "0 10px" };
  const styleLink2 = { color: "#62810e", padding: "0 5px" };
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [companySite, setCompanySite] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [errorList, setError] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/login");
    // fetch all counties
    fetch("https://countriesnow.space/api/v0.1/countries/iso")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [user, loading, navigate]);
  const register = (e) => {
    e.preventDefault();
    if (FName.length === 0) {
      setError("Please enter your first name");
    } else if (LName.length === 0) {
      setError("Please enter your last name");
    } else if (phone.length === 0) {
      setError("Please enter your phone");
    } else if (email.length === 0) {
      setError("Please enter your email");
    } else if (country.length === 0) {
      setError("Please enter your country");
    } else if (company.length === 0) {
      setError("Please enter your company");
    } else if (companySite.length === 0) {
      setError("Please enter your company site");
    } else if (address.length === 0) {
      setError("Please enter your address");
    } else if (state.length === 0) {
      setError("Please enter your state");
    } else if (zip.length === 0) {
      setError("Please enter your zip");
    } else if (city.length === 0) {
      setError("Please enter your city");
    } else if (password.length === 0) {
      setError("Please enter your password");
    } else if (confPassword.length === 0) {
      setError("Please enter your confirm password");
    } else if (password !== confPassword) {
      setError("must password equal confirm password");
    } else {
      createUser(
        FName,
        LName,
        email,
        phone,
        company,
        companySite,
        address,
        country,
        state,
        city,
        zip,
        password,
        dispatch
      );
      console.log(
        FName,
        LName,
        email,
        phone,
        company,
        companySite,
        address,
        country,
        state,
        city,
        zip,
        password
      );
      setError("Congrats ✌❤");
      // console.log( FName,
      //   LName,
      //   email,
      //   phone,
      //   company,
      //   companySite,
      //   address,
      //   country,
      //   state,
      //   city,
      //   zip,
      //   password)
    }
  };

  return (
    <>
      {errorList}
      <div className="loginContent">
        <h2>Create an Account</h2>
        <ul className="mainDiv">
          <li className="register">
            <h4>Register New Customers</h4>
            <hr />
            <p>Create an account, with your email address and password.</p>
            <form onSubmit={register}>
              <label> First Name *</label>
              <input onChange={(e) => setFName(e.target.value)} type="text" />
              <label>Last Name *</label>
              <input type="text" onChange={(e) => setLName(e.target.value)} />

              <label>Work Email *</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
              <label>Work Phone *</label>
              <input
                type="number"
                min="0"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>
                Company (please note: must be a registered business) *
              </label>
              <input type="text" onChange={(e) => setCompany(e.target.value)} />
              <label>Company Website & Social Media Handles</label>
              <input
                type="text"
                onChange={(e) => setCompanySite(e.target.value)}
              />
              <label>Street Address *</label>
              <input type="text" onChange={(e) => setAddress(e.target.value)} />
              <label>Country *</label>
              <select
                style={{ padding: "5px 15px", marginBottom: "15px" }}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>Select your country</option>
                {data &&
                  data.data.map((data, i) => (
                    <Fragment key={i}>
                      <option value={data.name}>{data.name}</option>
                    </Fragment>
                  ))}
              </select>
              <label>State/Province *</label>
              <input type="text" onChange={(e) => setState(e.target.value)} />
              <label>City *</label>
              <input type="text" onChange={(e) => setCity(e.target.value)} />
              <label>Zip/Postal Code *</label>
              <input type="text" onChange={(e) => setZip(e.target.value)} />
              <label>Password *</label>
              <input
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Confirm Password *</label>
              <input
                type="Password"
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <button>
                <span>SUBMIT</span>
              </button>
            </form>
          </li>
          <li className="notes">
            <h2>Have a Question?</h2>
            <h4>
              Give us a call at
              <a style={styleLink1} href="tel:1.914.920.2710">
                1.914.920.2710
              </a>{" "}
              or email
              <a
                style={styleLink2}
                href="mailto:CustomerService-OSC@olamnet.com"
              >
                CustomerService-OSC@olamnet.com
              </a>
            </h4>

            <br />
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Signup;
