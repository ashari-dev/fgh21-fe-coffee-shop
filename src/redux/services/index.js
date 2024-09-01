import { products } from "./products";
import { profile } from "./profile";
import { testimonials } from "./testimonial";

export const services = {
  [products.reducerPath]: products.reducer,
  [testimonials.reducerPath]: testimonials.reducer,
};

export const rtkMiddlewares = [products.middleware, testimonials.middleware];
