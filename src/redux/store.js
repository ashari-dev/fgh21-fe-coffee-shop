import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { rtkMiddlewares, services } from "./services";

export const store = configureStore({
  reducer,
  services,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
