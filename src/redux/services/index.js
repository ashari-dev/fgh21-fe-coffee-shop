import { product } from "./products";
import { profile } from "./profile";

export const services = {
  [product.reducerPath]: product.reducer,
  [profile.reducerPath]: profile.reducer,
};

export const rtkMiddlewares = [product.middleware];
