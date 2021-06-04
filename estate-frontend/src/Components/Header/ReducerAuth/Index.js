import { combineReducers } from "redux";
import auth from "../ReducerAuth/Auth";
import message from "../ReducerAuth/Auth";

export default combineReducers({
  auth,
  message,
});
