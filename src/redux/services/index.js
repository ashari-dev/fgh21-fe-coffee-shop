import { products } from "./products";
import { profile } from "./profile";

export const services = {
  [products.reducerPath]: products.reducer,
};

export const rtkMiddlewares = [products.middleware];
