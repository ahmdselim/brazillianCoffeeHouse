import React from "react";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import { useSelector } from "react-redux";

const wishList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const product = useSelector((state) => state.ProductsReducer.wishList);
  return (
    <>
      <div className="cartPage">
        <h2>Shopping Cart</h2>
        <div className="cartContent">
          <table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE </th>
                <th>BAGS</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((product) => (
                  <tr className="itemInfo">
                    <td className="item">
                      <strong>Colombia Tolima FTO - ASOSPAC</strong>
                      <dl>
                        <p>
                          <strong>SKU</strong> P609067-1
                        </p>
                        <p>
                          <strong>BAG SIZE</strong> 70 KG BAG
                        </p>
                        <p>
                          <strong>ETA</strong> Spot
                        </p>
                        <p>
                          <strong>WAREHOUSE</strong> Carteret, NJ
                        </p>
                        <p>
                          <strong>QUANTITY</strong> 75
                        </p>
                      </dl>
                    </td>
                    <td className="price">
                      <span>$4.72</span>
                    </td>
                    <td className="item">as</td>
                    <td className="subtotal">
                      <span>$2,185.20</span>
                    </td>
                  </tr>
                ))}
              <tr className="itemActions">
                <td>
                  <Link to="">
                    <FcEmptyTrash />
                  </Link>
                </td>
              </tr>
            </tbody>
            <button className="delButton" disabled>
              UPDATE SHOPPING CART
            </button>
          </table>

          <div className="cartOrder">
            <h3>Order Summary</h3>
            <div className="order">
              <div className="cartSubtotal">
                <div>
                  <strong>CART SUBTOTAL </strong>
                  <span>$2,185.20</span>
                </div>
                <div>
                  <strong>SHIPPING</strong>
                  <span>Determined at Checkout</span>
                </div>
              </div>

              <div className="orderSubtotal">
                <strong>ORDER SUBTOTAL </strong>
                <span>$2,185.20</span>
              </div>
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default wishList;
