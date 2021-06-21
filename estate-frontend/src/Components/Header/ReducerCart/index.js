import { combineReducers } from "redux";
import productReducers from "../ReducerCart/ProductReducer";
import cartReducer from "../ReducerCart/CartReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducer,
});
