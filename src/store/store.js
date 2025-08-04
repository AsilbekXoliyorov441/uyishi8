import { configureStore } from "@reduxjs/toolkit";
import { regionApi } from "./api";


export const store = configureStore({
  reducer: {
    [regionApi.reducerPath]: regionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(regionApi.middleware),
});