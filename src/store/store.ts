import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import { userApi } from "../api/userApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
