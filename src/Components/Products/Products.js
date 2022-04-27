import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FaThList } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import Ethiopian from "../Home/Images/Ethiopian.webp";
import origin from "../Home/Images/origin.webp";
import { auth } from "../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import CoffeeIcon from "./Images/coffeeIcon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, getProductsFromCarts } from "../../redux/actions/actions";

const Products = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const [item, setItem] = useState("grid");
  const products = useSelector((state) => state.ProductsReducer.products);
  const [itemQuantity, setQuantity] = useState(0);
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
      <img src={origin} alt="" className="originImg" />

      <div className="origin">
        <div className="originDesc">
          <h2>Origins</h2>
          <p>
            Origin. Few words are as evocative in any context, but within the
            context of coffee the word almost echoes, as if all the many hands
            that cause coffee to come our way formed a long tunnel to our ear,
            as if the word itself must travel too. Even if you have not yet been
            to a coffee growing region, the word “origin” has about it the sense
            of reminiscence, remembering. The word “origin” reminds us that
            coffee—for most roasters—journeys from elsewhere and over a distance
            that has never been rightly measured in miles alone. We offer green
            coffee beans from more than 30 origins, and many more journeys than
            that.
          </p>
        </div>

        <div className="shop">
          <div className="options">
            <h3>SHOPPING OPTIONS</h3>
            <div className="optionsList">
              <Collapsible trigger="sd" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="COUNTRY OF ORIGIN" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="STATUS" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="FLAVOR WHEEL" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="PROCESSING" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="CERTIFICATIONS" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="BAG TYPE" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>

              <Collapsible trigger="PLANT SPECIES" open>
                <hr />
                <form>
                  <div>
                    <input type="checkbox" />
                    <label>Continental NJ (4)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>The Annex (3)</label>
                  </div>
                </form>
              </Collapsible>
            </div>
          </div>

          <div className="productsList">
            <div className="productsListHead">
              <div>
                <FaTh onClick={() => setItem("grid")} />
                <FaThList onClick={() => setItem("list")} />
              </div>
              <div>{products && products.length} items</div>
              <div>
                <span> sort by</span>
                <select>
                  <option>Position</option>
                  <option>Product Name</option>
                </select>
              </div>
            </div>

            <div className="shop">
              <div className="products">
                {products &&
                  products.map((product, i) => (
                    <div
                      key={i}
                      className={
                        item === "grid" ? "product grid" : "product list"
                      }
                    >
                      <div className="address">
                        <Link className="link" to={`/product/${product.id}`}>
                          <h4>{product.data.name}</h4>
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
                        <p>Alameda ,CA</p> <span>193</span>
                      </div>
                      <div className="price">
                        {user ? (
                          <>
                            <div>
                              {product.data.onSale ? (
                                <p
                                  style={{
                                    background: "#b80e80",
                                    padding: "0 4px",
                                    lineHeight: "20px",
                                    color: "#FFF",
                                    width: "100%",
                                    textTransform: "uppercase",
                                    fontSize: "12px",
                                    fontWeight: "bolder",
                                    marginLeft: "-10px",
                                  }}
                                >
                                  on sale
                                </p>
                              ) : null}
                              <strong>${product.data.price} / lb</strong>
                              <div>$476.19 / bag</div>
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
                            <strong>$3.60 / lb</strong> <div>$476.19 / bag</div>
                          </>
                        )}
                      </div>
                      {user ? (
                        <button
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
                          Add to cart
                        </button>
                      ) : (
                        <button>
                          <Link className="link" to="/login">
                            login
                          </Link>
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
