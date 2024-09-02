import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { rtkMiddlewares } from "./services";

export const store = configureStore({
  reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
