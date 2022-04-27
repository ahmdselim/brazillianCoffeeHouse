import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  GET_USERS,
  ADD_TO_CART,
  ADD_TO_WISH_LIST,
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_CART,
  GET_WISH_LIST,
  UPDATE_PRODUCT,
} from "./types";
import {
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  db,
} from "../../Firebase/config";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

// create new user
export const createUser = async (
  FName,
  LName,
  email,
  phone,
  company,
  companySite,
  address,
  country,
  state,
  city,
  zip,
  password,
  dispatch
) => {
  const user = await registerWithEmailAndPassword(
    FName,
    LName,
    email,
    phone,
    company,
    companySite,
    address,
    country,
    state,
    city,
    zip,
    password
  );

  return <>{dispatch({ type: CREATE_USER, payload: user })}</>;
};

// login
export const loginUser = async (email, password, dispatch) => {
  const user = await logInWithEmailAndPassword(email, password);
  return dispatch({ type: LOGIN_USER, payload: user });
};

// logout
export const logoutUser = async (dispatch) => {
  const user = logout();
  return dispatch({ type: LOGOUT_USER, payload: user });
};

// add products
const addOrigins = async (
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
) => {
  const products = await addDoc(collection(db, "products"), {
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
  });
  return products;
};
export const addProducts = async (
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
) => {
  const products = await addOrigins(
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
  return dispatch({ type: ADD_PRODUCT, payload: products });
};

// add carts
const addProductsToCart = async (
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
  const products = await addDoc(collection(db, "cart"), {
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
  });
  return products;
};
export const addCart = async (
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
) => {
  const cart = await addProductsToCart(
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
  );
  return dispatch({ type: ADD_TO_CART, payload: cart });
};

// add wishList
const addProductsToWishList = async (
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
  const products = await addDoc(collection(db, "wishList"), {
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
  });
  return products;
};
export const addWishList = async (
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
) => {
  const wishList = await addProductsToWishList(
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
  );
  return dispatch({ type: ADD_TO_WISH_LIST, payload: wishList });
};

// get users
const getUser = async () => {
  let users = [];
  const people = await getDocs(collection(db, "users"));
  people.forEach((doc) => {
    users.push({ id: doc.id, data: doc.data() });
  });
  return users;
};
export const getUsers = async (dispatch) => {
  const users = await getUser();
  return dispatch({ type: GET_USERS, payload: users });
};

// get products
const getProducts = async () => {
  let products = [];
  const posts = await getDocs(collection(db, "products"));
  posts.forEach((doc) => {
    products.push({ id: doc.id, data: doc.data() });
  });
  return products;
};
export const getOrigins = async (dispatch) => {
  const products = await getProducts();
  return dispatch({ type: GET_PRODUCTS, payload: products });
};

// get cart
const getCarts = async () => {
  let carts = [];
  const cart = await getDocs(collection(db, "cart"));
  cart.forEach((doc) => {
    carts.push({ id: doc.id, data: doc.data() });
  });
  return carts;
};
export const getProductsFromCarts = async (dispatch) => {
  const cart = await getCarts();
  return dispatch({ type: GET_CART, payload: cart });
};

// get wishList
const getWishList = async () => {
  let products = [];
  const wishList = await getDocs(collection(db, "wishList"));
  wishList.forEach((doc) => {
    products.push({ id: doc.id, data: doc.data() });
  });
  return products;
};
export const getProductsFromWishList = async (dispatch) => {
  const wishList = await getWishList();
  return dispatch({ type: GET_WISH_LIST, payload: wishList });
};

// delete product from cart
export const deleteProductFromCart = async (id) => {
  return await deleteDoc(doc(db, "cart", id));
};

// delete product from wishlist
export const deleteProductFromWishList = async (id) => {
  return await deleteDoc(doc(db, "wishList", id));
};

// update user to admin
export const makeAdmin = async (id, rank) => {
  const user = doc(db, "users", id);
  const admin = rank === true ? "1" : "0";
  return await updateDoc(user, {
    rank: admin,
  });
};

// update product
const updateOrigins = async (
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
  discount
) => {
  const product = doc(db, "products", id);
  const products = await updateDoc(product, {
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
  });
  return products;
};
export const updateProduct = async (
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
  dispatch
) => {
  const products = await updateOrigins(
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
    discount
  );
  return dispatch({ type: UPDATE_PRODUCT, payload: products });
};
