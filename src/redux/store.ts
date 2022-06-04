import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersApi } from "./services/api";
import themeReducer from "./slices/themeSlices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
