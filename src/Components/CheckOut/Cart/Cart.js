import React from "react";
import { FcRight } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import {
  addWishList,
  deleteProductFromCart,
  getProductsFromCarts,
  deleteProductFromWishList,
  addCart,
  getProductsFromWishList,
} from "../../../redux/actions/actions";

const Cart = () => {
  const cart = useSelector((state) => state.ProductsReducer.cart);
  const wishList = useSelector((state) => state.ProductsReducer.wishList);
  const dispatch = useDispatch();
  const deleteCart = (id) => {
    deleteProductFromCart(id);
    getProductsFromCarts(dispatch);
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

    deleteProductFromWishList(wishListID);
    getProductsFromCarts(dispatch);
    getProductsFromWishList(dispatch);
  };
  // add to wishList
  const addToWishList = (
    cartID,
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
    addWishList(
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
    deleteProductFromCart(cartID);
    getProductsFromCarts(dispatch);
    getProductsFromWishList(dispatch);
  };
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
            {cart &&
              cart.map((product, i) => (
                <tbody key={i}>
                  <tr className="itemInfo">
                    <td className="item">
                      <strong>{product.data.name}</strong>
                      <dl>
                        <p>
                          <strong>SKU</strong> {product.data.sku}
                        </p>
                        <p>
                          <strong>BAG SIZE</strong> {product.data.bagWeight} KG
                          BAG
                        </p>
                        <p>
                          <strong>WAREHOUSE</strong> {product.data.country}
                        </p>
                        {product.data.discount ? (
                          <p>
                            <strong>DISCOUNT</strong> {product.data.discount} %
                          </p>
                        ) : null}
                        <p>
                          <strong>QUANTITY</strong> {product.data.quantity}
                        </p>
                      </dl>
                    </td>
                    <td className="price">
                      <span>${product.data.price}</span>
                    </td>
                    <td className="item">{product.data.quantity}</td>
                    <td className="subtotal">
                      <span>
                        $
                        {product.data.discount
                          ? (product.data.price *
                              product.data.bagWeight *
                              product.data.quantity *
                              product.data.discount) /
                            100
                          : product.data.price *
                            product.data.bagWeight *
                            product.data.quantity}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="itemActions">
                      <button
                        className="delButton"
                        style={{ marginRight: "100px" }}
                        onClick={() =>
                          addToWishList(
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
                            product.data.coffeeGrade,
                            product.data.onSale,
                            product.data.discount,
                            product.data.quantity
                          )
                        }
                      >
                        <span
                          style={{
                            marginRight: "20px",
                            top: "-3px",
                            position: "relative",
                          }}
                        >
                          Save For Later
                        </span>
                        <FcRight />
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => deleteCart(product.id)}
                      >
                        <FcEmptyTrash
                          style={{ top: "-3px", position: "relative" }}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            <button className="cartBtnUpdate" disabled>
              UPDATE SHOPPING CART
            </button>
            {wishList && wishList.length !== 0 ? <h2>Saved Items</h2> : null}
          </table>

          <table>
            {wishList && wishList.length !== 0 ? (
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>PRICE </th>
                  <th>BAGS</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
            ) : null}
            {wishList &&
              wishList.map((product, i) => (
                <tbody key={i}>
                  <tr className="itemInfo">
                    <td className="item">
                      <strong>{product.data.name}</strong>
                      <dl>
                        <p>
                          <strong>SKU</strong> {product.data.sku}
                        </p>
                        <p>
                          <strong>BAG SIZE</strong> {product.data.bagWeight} KG
                          BAG
                        </p>
                        <p>
                          <strong>WAREHOUSE</strong> {product.data.country}
                        </p>
                        {product.data.discount ? (
                          <p>
                            <strong>DISCOUNT</strong> {product.data.discount} %
                          </p>
                        ) : null}
                        <p>
                          <strong>QUANTITY</strong> {product.data.quantity}
                        </p>
                      </dl>
                    </td>
                    <td className="price">
                      <span>${product.data.price}</span>
                    </td>
                    <td className="item">{product.data.quantity}</td>
                    <td className="subtotal">
                      <span>
                        $
                        {product.data.discount
                          ? (product.data.price *
                              product.data.bagWeight *
                              product.data.quantity *
                              product.data.discount) /
                            100
                          : product.data.price *
                            product.data.bagWeight *
                            product.data.quantity}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="itemActions">
                      <button
                        className="delButton"
                        style={{ marginRight: "100px", color: "#3c3c3b" }}
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
                            product.data.coffeeGrade,
                            product.data.onSale,
                            product.data.discount,
                            product.data.quantity
                          )
                        }
                      >
                        <span
                          style={{
                            marginRight: "20px",
                            top: "-3px",
                            position: "relative",
                          }}
                        >
                          Move To Cart
                        </span>
                        <FcRight />
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => deleteWishList(product.id)}
                      >
                        <FcEmptyTrash
                          style={{ top: "-3px", position: "relative" }}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>

          <div className="cartOrder">
            <h3>Order Summary</h3>
            <div className="order">
              <div className="cartSubtotal">
                <div>
                  <strong>CART SUBTOTAL </strong>

                  <span>
                    $
                    {cart &&
                      cart.reduce(
                        (total, item) =>
                          item.data.discount
                            ? total +
                              (item.data.price *
                                item.data.bagWeight *
                                item.data.quantity *
                                item.data.discount) /
                                100
                            : total +
                              parseInt(item.data.quantity) *
                                parseInt(item.data.price) *
                                parseInt(item.data.bagWeight),
                        0
                      )}
                  </span>
                </div>
                <div>
                  <strong>SHIPPING</strong>
                  <span>Determined at Checkout</span>
                </div>
              </div>

              <div className="orderSubtotal">
                <strong>ORDER SUBTOTAL </strong>
                <span>
                  $
                  {cart &&
                    cart.reduce(
                      (total, item) =>
                        item.data.discount
                          ? total +
                            (item.data.price *
                              item.data.bagWeight *
                              item.data.quantity *
                              item.data.discount) /
                              100
                          : total +
                            parseInt(item.data.quantity) *
                              parseInt(item.data.price) *
                              parseInt(item.data.bagWeight),
                      0
                    )}
                </span>
              </div>
            </div>
            <button disabled>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
