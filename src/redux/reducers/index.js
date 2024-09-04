import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import profile from "./profile";
import payment from "./payment";
import { services } from "../services";

const reducer = combineReducers({
  profile,
  payment,
  ...services,
});

const reducers = combineReducers({
  auth,
})

export default (reducer, reducers);
