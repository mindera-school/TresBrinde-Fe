import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const userInfo = localStorage.getItem("userInfo");
const userInfoStorage = userInfo ? JSON.parse(userInfo) : null;

const productsList = localStorage.getItem("productsList");
const productsListStorage = productsList ? JSON.parse(productsList) : null;

const budgetList = localStorage.getItem("createBudget");
const budgetListStorage = budgetList ? JSON.parse(budgetList) : null;

const cartItems = localStorage.getItem("cartItems");
const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

const isAuth = userInfoStorage ? true : false;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    totalPrice: 0,
    uploadImages: [],
  },
  userInfo: { user: userInfoStorage, isAuthenticating: isAuth },
  productList: { products: productsListStorage },
  budgetList: { budget: budgetListStorage },
};

export type RootState = ReturnType<typeof reducer>;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
