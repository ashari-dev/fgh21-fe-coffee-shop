import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profile = createApi({
  reducerPath: "query/profile",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://103.93.58.89:23230",
  }),
  endpoints: (builder) => ({
    listProfile: builder.query({
      query: () => `/profile`,
    }),
    getProfile: builder.query({
      query: (id) => `/profile/${id}`,
    }),
  }),
});

export const { useListProfileQuery, useGetProfileQuery } = profile;
