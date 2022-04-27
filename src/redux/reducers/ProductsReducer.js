import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  GET_USERS,
  CREATE_USER_COLLECTION,
  ADD_PRODUCT,
  GET_PRODUCTS,
  ADD_TO_CART,
  GET_CART,
  ADD_TO_WISH_LIST,
  GET_WISH_LIST,
} from "../actions/types";
const initState = [];
export function ProductsReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };

    case LOGOUT_USER:
      return { ...state, user: action.payload };

    case CREATE_USER:
      return { ...state };
    case CREATE_USER_COLLECTION:
      return { ...state };

    case GET_USERS:
      return { ...state, users: action.payload };

    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT:
      return { ...state };

    case GET_CART:
      return { ...state, cart: action.payload };

    case ADD_TO_CART:
      return { ...state };

    case ADD_TO_WISH_LIST:
      return { ...state };

    case GET_WISH_LIST:
      return { ...state, wishList: action.payload };

    default:
      return state;
  }
}
