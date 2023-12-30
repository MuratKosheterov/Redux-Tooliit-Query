import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productsApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getFM) => getFM().concat(productApi.middleware),
});
