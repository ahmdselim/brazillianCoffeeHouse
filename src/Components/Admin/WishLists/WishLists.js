import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { auth } from "../../../Firebase/config";
import CoffeeIcon from "../../Home/Images/coffeeIcon.svg";
import Ethiopian from "../../Home/Images/Ethiopian.webp";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getProductsFromCarts,
  deleteProductFromWishList,
  addCart,
  getProductsFromWishList,
} from "../../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WishLists = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.wishList);
  const [itemQuantity, setQuantity] = useState(0);
  const handleQuantity = (e) => {
    const value = e.target.value.replace(/[^\d]/, "");
    if (parseInt(value) !== 0) {
      setQuantity(value);
    }
  };
  const deleteWishList = (id) => {
    deleteProductFromWishList(id);
    getProductsFromWishList(dispatch);
  };
  // add to Cart
  const addToCart = (
    wishListID,
    id,
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
    quantity
  ) => {
    addCart(
      id,
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
      quantity,
      dispatch
    );
    deleteProductFromWishList(wishListID);
    getProductsFromCarts(dispatch);
    getProductsFromWishList(dispatch);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/");
  }, [user, loading, navigate]);
  return (
    <>
      <div className="account">
        <Sidebar />
        <div className="wishLists">
          <div className="products">
            {products
              ? products.map((product, i) => (
                  <div key={i} className="product">
                    <div className="address">
                      <Link className="link" to={`/product/${product.data.id}`}>
                        <h3>{product.data.name}</h3>
                      </Link>
                      <img src={Ethiopian} alt="" />
                    </div>
                    <div className="desc">
                      <img src={CoffeeIcon} alt="" />
                      <p>
                        Heavy body, dried blueberry, toffee, nougat, malt
                        chocolate
                      </p>
                    </div>
                    <div className="country">
                      {product.data.onSale ? (
                        <p
                          className="onSale"
                          style={{
                            background: "#b80e80",
                            padding: "0 4px",
                            lineHeight: "20px",
                            color: "#FFF",
                            textTransform: "uppercase",
                            fontSize: "12px",
                            fontWeight: "bolder",
                          }}
                        >
                          on sale
                        </p>
                      ) : null}
                      <p>{product.data.country}</p>
                      <span>{product.data.price}</span>
                    </div>
                    <div className="price">
                      {user ? (
                        <>
                          <div>
                            <strong>${product.data.price} / lb</strong>
                            <div>${product.data.bagWeight} / bag</div>
                          </div>
                          <div>
                            <input
                              className="cartQty"
                              defaultValue={0}
                              type="number"
                              onChange={handleQuantity}
                              min="0"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <strong>${product.data.productPrice} / lb</strong>
                          <div>${product.data.bagWeight} / bag</div>
                        </>
                      )}
                    </div>
                    {user ? (
                      <>
                        <button
                          onClick={() =>
                            addToCart(
                              product.id,
                              product.data.id,
                              product.data.name,
                              product.data.bagWeight,
                              product.data.price,
                              product.data.country,
                              product.data.harvestSeason,
                              product.data.sku,
                              product.data.region,
                              product.data.frameName,
                              product.data.growingAltitude,
                              product.data.variety,
                              product.data.processing,
                              product.data.plantSpecies,
                              product.data.onSale,
                              product.data.discount,
                              itemQuantity
                            )
                          }
                        >
                          Move To Cart
                        </button>
                        <button
                          className="delBtn"
                          onClick={() => deleteWishList(product.id)}
                        >
                          delete
                        </button>
                      </>
                    ) : (
                      <Link to="/login">
                        <button>LOG IN TO BUY / SAMPLE</button>
                      </Link>
                    )}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishLists;
