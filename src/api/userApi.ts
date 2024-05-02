import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IRegisterUserResponse,
  IRegisterUserPayload,
  ILoginUserPayload,
  ILoginUserResponse,
  IUserResponse,
  IAddUserPhotoResponse,
  IPhotoResponse,
} from "./types";
import { baseUrl } from "../utils/userUrl";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>(
      {
        query: (body) => ({
          url: "registration",
          method: "POST",
          body,
        }),
      }
    ),
    
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    
    getUserById: builder.query<IUserResponse, number>({
      query: (user_id) => `user?user_id=${user_id}`,
    }),
    
    getPhotoById: builder.query<IPhotoResponse, number>({
      query: (photo_id) => `photo?photo_id=${photo_id}`,
    }),
    
    addUserPhoto: builder.mutation<IAddUserPhotoResponse, FormData>({
      query: (file) => ({
        url: "add-photo",
        method: "POST",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserByIdQuery,
  useAddUserPhotoMutation,
  useGetPhotoByIdQuery,
} = userApi;
