import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "query/product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    listUsers: builder.query({
      query: () => `/products`,
    }),
    getUser: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useListUsersQuery, useGetUserQuery } = products;
