import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import carts from "./carts";
import order from "./order";
import { services } from "../services";

const reducer = combineReducers({
  auth,
  profile,
  carts,
  order,
  ...services,
});
// console.log(services)

export default reducer;
