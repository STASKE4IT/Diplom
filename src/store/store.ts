import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import { userApi } from "../api/userApi";
import { workCardApi } from "../api/workCardApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [userApi.reducerPath]: userApi.reducer,
    [workCardApi.reducerPath]: workCardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workCardApi.middleware).concat(userApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

