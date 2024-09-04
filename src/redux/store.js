import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { rtkMiddlewares } from "./services";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer) 

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
