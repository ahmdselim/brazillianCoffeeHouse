import React, { useEffect } from "react";
import HomePage from "./Pages/Home/homePage";
import LoginPage from "./Pages/Login/loginPage";
import SignupPage from "./Pages/Signup/signupPage";
import RestPage from "./Pages/Rest/restPage";
import ProductsPage from "./Pages/Products/productsPage";
import ProductPage from "./Pages/Product/productPage";
import CartPage from "./Pages/CheckOut/Cart/cartPage";
import ContactPage from "./Pages/Contact/contactPage";
import WishListPage from "./Pages/CheckOut/wishList/wishListPage";
import AccountPage from "./Pages/Admin/Account/AccountPage";
import WishListsPage from "./Pages/Admin/WishLists/WishListsPage";
import OrderPage from "./Pages/Admin/Orders/OrderPage";
import EditAccountPage from "./Pages/Admin/EditAccount/EditAccountPage";
import UsersPage from "./Pages/Admin/Users/UsersPage";
import AddProductPage from "./Pages/Admin/AddProduct/AddProductPage";
import ProductsAdminPage from "./Pages/Admin/ProductsPage/ProductsAdminPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import comingSoon from "./Images/1.jpg";
import olam from "./Images/olam.webp";
import "./App.css";
import {
  getUsers,
  getOrigins,
  getProductsFromCarts,
  getProductsFromWishList,
} from "./redux/actions/actions";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers(dispatch);
    getOrigins(dispatch);
    getProductsFromCarts(dispatch);
    getProductsFromWishList(dispatch);
  }, [dispatch]);
  const active = 1;
  if (active === 1) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/origins" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/reset" element={<RestPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wishLists" element={<WishListsPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/editInfo" element={<EditAccountPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/addProduct" element={<AddProductPage />} />
          <Route path="/products" element={<ProductsAdminPage />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <section id="home">
        <div class="banner-container">
          <div class="container">
            <div class="heading text-center">
              <div class="logo">
                <img src={olam} alt="logo" />
              </div>
            </div>
            <div class="countdown styled"></div>
            <div class="heading text-center">
              <h2>
                We are at present working on an awesome new site.
                <i class="icon-heart"></i> Stay Tuned!
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default App;
