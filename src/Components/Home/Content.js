import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Brazil from "./Images/brazil.webp";
import Peru from "./Images/peru.webp";
import CoffeeIcon from "./Images/coffeeIcon.svg";
import Coffee1 from "./Images/1.webp";
import Africa from "./Images/Africa_icon.webp";
import Ethiopian from "./Images/Ethiopian.webp";
import { auth } from "../../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { addCart, getProductsFromCarts } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
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
      <div className="banner">
        <div className="textBanner">
          <div className="overlay"></div>
          <div className="info">
            <h2>New arrivals are here</h2>
            <p>
              We have brand new coffees waiting to be cupped. Filter by origin,
              processing method, tasting notes and certifications.
            </p>
            <Link className="ShopLink" to="/origins">
              shop new
            </Link>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className="row">
          <div className="info">
            <h2>Sourced thoughtfully.</h2>
            <p>
              We are committed to source quality green coffee beans, create
              shared growth, and drive change...
            </p>
            <span>Read about</span>
          </div>

          <div className="greenCoffee">
            <div className="head">
              <Link to="/product">
                <h3>Brazil Eagle Mogiana</h3>
              </Link>
              <img src={Brazil} alt="" />
            </div>
            <div className="content">
              <p>Chocolate, honey, almond, dried fruits</p>
              <div className="CountryInfo">
                <p>Carteret, NJ:</p>
                <span>11</span>
              </div>
              <div className="salary">
                <p>$3.74 / lb</p>
                {user ? (
                  <button>ADD TO CART</button>
                ) : (
                  <Link to="/login">
                    <button>LOG IN TO BUY / SAMPLE</button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="greenCoffee">
            <div className="head">
              <Link to="/product">
                <h3>Peru Kovachii Organic</h3>
              </Link>
              <img src={Peru} alt="" />
            </div>
            <div className="content">
              <p>Chocolate, honey, almond, dried fruits</p>
              <div className="CountryInfo">
                <p>Carteret, NJ:</p>
                <span>112</span>
              </div>
              <div className="salary">
                <p>$4.32 / lb</p>
                {user ? (
                  <button>ADD TO CART</button>
                ) : (
                  <Link to="/login">
                    <button>LOG IN TO BUY / SAMPLE</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grtStarted">
        <div className="main">
          <h2>Join us on our journey.</h2>
          <p>
            At Olam Specialty Coffee, we strive to seamlessly connect roasters
            to the finest green coffees. We work closely with both our producer
            and roaster partners in order to provide the best customer service
            possible. For our producer partners, our team is driven to provide a
            stable market, fair price and help maintain the highest quality
            standards.
          </p>
          <button>GET STARTED</button>
        </div>
      </div>
      <div className="Categories">
        <h2>
          Shop <span>Categories</span>
        </h2>
        <div className="cats">
          <div className="cat">
            <img src={Coffee1} alt="" />
            <div className="overlay"></div>
            <div>
              <img src={Africa} alt="" />
              <h2>Shop</h2>
              <p>East African Coffees</p>
            </div>
          </div>
          <div className="cat">
            <img src={Coffee1} alt="" />
            <div className="overlay"></div>
            <div>
              <img src={Africa} alt="" />
              <h2>Shop</h2>
              <p>East African Coffees</p>
            </div>
          </div>
          <div className="cat">
            <img src={Coffee1} alt="" />
            <div className="overlay"></div>
            <div>
              <img src={Africa} alt="" />
              <h2>Shop</h2>
              <p>East African Coffees</p>
            </div>
          </div>
          <div className="cat">
            <img src={Coffee1} alt="" />
            <div className="overlay"></div>
            <div>
              <img src={Africa} alt="" />
              <h2>Shop</h2>
              <p>East African Coffees</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shop">
        <h2>
          Shop <span>Ethiopians</span>
          <br />
        </h2>
        <Link to="/origins">
          <p>
            BROWSE ALL <FiArrowRight viewBox="0 0 24 18" />
          </p>
        </Link>

        <div className="products">
          {products
            ? products.map((product, i) => (
                <div key={i} className="product">
                  <div className="address">
                    <Link className="link" to={`/product/${product.id}`}>
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
                    <p>{product.data.country}</p>
                    <span>{product.data.price}</span>
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
                                textTransform: "uppercase",
                                fontSize: "12px",
                                fontWeight: "bolder",
                              }}
                            >
                              on sale
                            </p>
                          ) : null}
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
                        <strong>${product.data.price} / lb</strong>
                        <div>${product.data.bagWeight} / bag</div>
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
                      ADD TO CART
                    </button>
                  ) : (
                    <Link to="/login">
                      <button>LOG IN TO BUY / SAMPLE</button>
                    </Link>
                  )}
                </div>
              ))
            : null}
        </div>

        <div className="wrapper">
          <div className="content">
            <h2>Understanding coffee prices.</h2>
            <p>
              Predicting coffee market shifts can be like predicting the
              weather. Read our latest blog post 'Coffee Prices and Coffee
              History' to learn more about the volatile nature of price
              fluctuations and what can attribute to these increases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
