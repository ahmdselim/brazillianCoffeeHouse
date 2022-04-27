import React, { useState } from "react";
import Cjamarca from "./Images/cajamarca.png";
import { auth } from "../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getProductsFromCarts } from "../../redux/actions/actions";

const Product = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.ProductsReducer.products);
  const [itemQuantity, setQuantity] = useState(parseInt(0));
  const handleQuantity = (e) => {
    const value = e.target.value.replace(/[^\d]/, "");
    if (parseInt(value) !== 0) {
      setQuantity(value);
    }
  };
  const addToCart = (
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
    itemQuantity
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
      itemQuantity,
      dispatch
    );
    getProductsFromCarts(dispatch);
  };
  return (
    <>
      {products &&
        // eslint-disable-next-line array-callback-return
        products.map((product, i) => {
          if (product.id === id) {
            return (
              <div key={i} className="product">
                <div className="pageTitle">
                  <h2>{product.data.name}</h2>
                  <div>
                    <span>Dark chocolate, black cherry, toffee, honey</span>
                  </div>
                </div>
                <div className="productMain">
                  <div className="productImage">
                    <img src={Cjamarca} alt="" />
                  </div>
                  <div className="productInfo">
                    <div className="info">
                      <div className="salary">
                        {product.data.onSale ? (
                          <p className="onSale"
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
                        <h2>${product.data.price} / lb</h2>
                        <p>${product.data.bagWeight} / bag</p>
                      </div>
                      <table>
                        <tbody>
                          <tr>
                            <th>Bag Weight</th>
                            <td>{product.data.bagWeight} KG BAG</td>
                          </tr>
                          <tr>
                            <th>Harvest Season</th>
                            <td>{product.data.harvestSeason}</td>
                          </tr>
                          <tr>
                            <th>
                              <div>
                                <span>
                                  <span>ETA</span>
                                </span>
                                <span></span>
                              </div>
                            </th>
                            <td>{product.data.harvestSeason}</td>
                          </tr>
                          <tr>
                            <th>SKU</th>
                            <td>{product.data.sku}</td>
                          </tr>
                        </tbody>
                      </table>
                      {user ? (
                        <>
                          <div>
                            <input
                              className="cartQty"
                              defaultValue={0}
                              type="number"
                              style={{ width: "20%" }}
                              min="0"
                              onChange={handleQuantity}
                            />
                          </div>
                          <button
                            className="productBtn"
                            onClick={() =>
                              addToCart(
                                product.id,
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
                                product.data.coffeeGrade,
                                product.data.onSale,
                                product.data.discount,
                                itemQuantity
                              )
                            }
                          >
                            ADD TO CART
                          </button>
                        </>
                      ) : (
                        <>
                          <Link to="/login">
                            <button className="productBtn">
                              LOG IN TO BUY / SAMPLE
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};

export default Product;
