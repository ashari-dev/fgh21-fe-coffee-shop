import { products } from "./products";
import { profile } from "./profile";
import { testimonials } from "./testimonial";
import { cart } from "./cart";
import { transaction } from "./transaction";

export const services = {
  [products.reducerPath]: products.reducer,
  [testimonials.reducerPath]: testimonials.reducer,
  [cart.reducerPath]: cart.reducer,
  [transaction.reducerPath]: transaction.reducer,
};

export const rtkMiddlewares = [products.middleware, testimonials.middleware, cart.middleware, transaction.middleware];
