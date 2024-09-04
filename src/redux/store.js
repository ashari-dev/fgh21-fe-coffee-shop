import { configureStore } from "@reduxjs/toolkit"
import { rtkMiddlewares } from "./services";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import reducers from "./reducers/auth";

const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, reducers) 

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkMiddlewares),
});
