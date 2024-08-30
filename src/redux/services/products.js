import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const product = createApi({
  reducerPath: "query/product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    query: () => `/product`,
  }),
  getProduct: builder.query({
    query: (id) => `/product/${id}`,
  }),
});

export const { useListProductsQuery, useGetProductQuery } = product;
