import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";

const reducer = combineReducers({
  auth,
  profile,
});

export default reducer;
