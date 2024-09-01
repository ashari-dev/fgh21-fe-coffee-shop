import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import { services } from "../services";

const reducer = combineReducers({
  auth,
  profile,
  ...services,
});

export default reducer;
