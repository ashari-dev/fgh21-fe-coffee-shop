import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "query/product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://103.93.58.89:23230",
  }),
  endpoints: (builder) => ({
    listProducts: builder.query({
      query: ([page, limit]) =>
        `/products/our-product/?page=${page}&limit=${limit}`,
    }),
    getProducts: builder.query({
      query: (id) => `/products/our-product/${id}`,
    }),
  }),
});

export const { useListProductsQuery, useGetProductsQuery } = products;
