import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../../Firebase/config";
import CoffeeIcon from "../../Home/Images/coffeeIcon.svg";
import Ethiopian from "../../Home/Images/Ethiopian.webp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const Products = () => {
  const products = useSelector((state) => state.ProductsReducer.products);
  const users = useSelector((state) => state.ProductsReducer.users);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) navigate("/");
    if (users && users.map((user) => user.data.rank).join() !== "1")
      navigate("/");
  }, [user, loading, navigate]);
  return (
    <>
      {" "}
      <div className="account">
        <Sidebar />
        <div className="wishLists">
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
                            <strong>${product.data.price} / lb</strong>
                            <div>${product.data.bagWeight} / bag</div>
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
                      <button>Delete</button>
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

export default Products;
