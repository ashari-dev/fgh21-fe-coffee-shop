import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import payment from "./payment";
import { services } from "../services";

const reducer = combineReducers({
  auth,
  profile,
  payment,
  ...services,
});

export default reducer;
