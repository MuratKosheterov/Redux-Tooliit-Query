import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "products",
    }),
    getSinglePage: build.query({
        query: (product)=> `products/search?q=${product}`,
    })
  }),
});

export const { useGetAllProductsQuery, useGetSinglePageQuery } = productApi;