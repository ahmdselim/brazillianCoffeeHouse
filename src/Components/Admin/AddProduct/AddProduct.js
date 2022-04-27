import React, { useState, useEffect, Fragment } from "react";
import Sidebar from "../Sidebar";
import { auth } from "../../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../../redux/actions/actions";

const AddProduct = () => {
  const users = useSelector((state) => state.ProductsReducer.users);
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [bagWeight, setBagWeight] = useState();
  const [price, setPrice] = useState();
  const [country, setCountry] = useState("");
  const [harvestSeason, setHarvestSeason] = useState("");
  const [sku, setSku] = useState("");
  const [region, setRegion] = useState("");
  const [frameName, setFrameName] = useState("");
  const [growingAltitude, setGrowingAltitude] = useState("");
  const [variety, setVariety] = useState("");
  const [processing, setProcessing] = useState("");
  const [plantSpecies, setPlantSpecies] = useState("");
  const [coffeeGrade, setCoffeeGrade] = useState("");
  const [onSale, setOnSale] = useState(false);
  const [discount, setDiscount] = useState();

  const [errorList, setError] = useState([]);
  const handleSale = () => {
    setOnSale(!onSale);
    console.log(onSale);
  };

  // add product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setError("Please enter product name");
    } else if (bagWeight.length === 0) {
      setError("Please enter bag weight of product");
    } else if (price.length === 0) {
      setError("Please enter price of product");
    } else if (harvestSeason.length === 0) {
      setError("Please enter harvest season of product");
    } else if (country.length === 0) {
      setError("Please enter country of product");
    } else if (sku.length === 0) {
      setError("Please enter sku of product");
    } else if (region.length === 0) {
      setError("Please enter region of product");
    } else if (frameName.length === 0) {
      setError("Please enter frame name of product");
    } else if (growingAltitude.length === 0) {
      setError("Please enter growing Altitude of product");
    } else if (variety.length === 0) {
      setError("Please enter variety of product");
    } else if (processing.length === 0) {
      setError("Please enter processing of product");
    } else if (plantSpecies.length === 0) {
      setError("Please enter plant species of product");
    } else if (coffeeGrade.length === 0) {
      setError("Please enter coffee grade of product");
    } else {
      addProducts(
        name,
        bagWeight,
        price,
        country,
        harvestSeason,
        sku,
        region,
        frameName,
        growingAltitude,
        variety,
        processing,
        plantSpecies,
        coffeeGrade,
        onSale,
        discount,
        dispatch
      );
      setError("Congrats ✌❤");
      console.log(
        name,
        bagWeight,
        price,
        country,
        harvestSeason,
        sku,
        region,
        frameName,
        growingAltitude,
        variety,
        processing,
        plantSpecies,
        coffeeGrade,
        onSale,
        discount
      );
    }
  };
  // useEffect
  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login");
    if (users && users.map((user) => user.data.rank).join() !== "1")
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
  return (
    <>
      {errorList}
      <div className="account">
        <Sidebar />
        <div className="loginContent">
          <ul className="mainDiv">
            <li className="register">
              <h2>Add Product</h2>
              <hr />
              <p>If you have an account, sign in with your email address.</p>
              <form onSubmit={handleAddProduct}>
                <label>Name *</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <label>BagWeight *</label>
                <input
                  type="number"
                  onChange={(e) => setBagWeight(e.target.value)}
                />
                <label>Price *</label>
                <input
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label>Country of Origin *</label>
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
                <label>HarvestSeason *</label>
                <input
                  type="text"
                  onChange={(e) => setHarvestSeason(e.target.value)}
                />
                <label>Sku *</label>
                <input type="text" onChange={(e) => setSku(e.target.value)} />
                <label>Region *</label>
                <input
                  type="text"
                  onChange={(e) => setRegion(e.target.value)}
                />
                <label>Farm Name *</label>
                <input
                  type="text"
                  onChange={(e) => setFrameName(e.target.value)}
                />
                <label>Growing Altitude *</label>
                <input
                  type="text"
                  onChange={(e) => setGrowingAltitude(e.target.value)}
                />
                <label>Variety *</label>
                <input
                  type="text"
                  onChange={(e) => setVariety(e.target.value)}
                />
                <label>Processing *</label>
                <input
                  type="text"
                  onChange={(e) => setProcessing(e.target.value)}
                />
                <label>Plant Species *</label>
                <input
                  type="text"
                  onChange={(e) => setPlantSpecies(e.target.value)}
                />
                <label>Coffee Grade *</label>
                <input
                  type="text"
                  onChange={(e) => setCoffeeGrade(e.target.value)}
                />
                <label>On Sale *</label>
                <div className="switch_box box_1">
                  <input
                    type="checkbox"
                    className="switch_1"
                    onChange={handleSale}
                  />
                </div>
                <input
                  type="number"
                  min="0"
                  disabled={onSale !== true ? true : false}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <button>
                  <span>Add Product</span>
                </button>
              </form>
              <p> * REQUIRED FIELDS</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
