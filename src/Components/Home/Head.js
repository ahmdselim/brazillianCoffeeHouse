import React, { useState } from "react";
import SunRise from "./Images/sunrsie.jpg";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoAppsOutline } from "react-icons/io5";
import { TiTimesOutline } from "react-icons/ti";
import { TiUser } from "react-icons/ti";
import { auth } from "../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/actions";

const Head = () => {
  const [user] = useAuthState(auth);
  const [isClicked, setClicked] = useState(1);
  const products = useSelector((state) => state.ProductsReducer.products);
  const cart = useSelector((state) => state.ProductsReducer.cart);

  const dispatch = useDispatch();
  const logout = async () => logoutUser(dispatch);

  const [item, setItem] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      const product =
        products &&
        products
          .map((product) => product)
          .filter((product) =>
            product.data.productName.toLowerCase().includes(value.toLowerCase())
          );
      setItem(product);
    } else setItem();
  };

  return (
    <>
      <div className="header">
        <div className="navbar">
          <ul className="navbarList">
            <li>shipping rates</li>
            <li>about</li>
            <li>support</li>
            <li>blog</li>
          </ul>
        </div>

        <div className="content">
          <Link to="/" className="logoImg">
            <img src={SunRise} alt="logo" />
          </Link>
          <input
            type="search"
            placeholder="Search coffees, countries, or flavor profiles"
            onChange={handleChange}
          />
          {item ? (
            <ul className="productsList">
              {item &&
                item.map((product, i) => (
                  <li key={i}>
                    <Link className="link" to={`/product/${product.id}`}>
                      {product.data.productName}
                    </Link>
                  </li>
                ))}
            </ul>
          ) : null}
          <ul className={isClicked ? "menuList" : "menuOpen"}>
            <TiTimesOutline
              className="times"
              onClick={() => setClicked(!isClicked)}
            />
            <li>
              <Link to="/origins">origins</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            {user ? (
              <li
                onClick={logout}
                style={{ cursor: "pointer", fontWeight: "700" }}
              >
                <span>logOut</span>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">login</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/cart">
                <span className="cartNum">
                  {cart &&
                    cart.reduce(
                      (total, item) => total + parseInt(item.data.quantity),
                      0
                    )}
                </span>
                <FiShoppingCart className="cart" />
              </Link>
            </li>
            <li>
              <Link to="/account">
                <TiUser
                  className="cart"
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
            </li>
          </ul>
          <IoAppsOutline
            className="menu"
            onClick={() => setClicked(!isClicked)}
          />
        </div>
      </div>
    </>
  );
};

export default Head;
