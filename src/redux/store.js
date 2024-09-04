import { configureStore } from "@reduxjs/toolkit"
import { rtkMiddlewares } from "./services";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer) 

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
