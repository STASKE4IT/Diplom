import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IRegisterUserResponse,
  IRegisterUserPayload,
  ILoginUserPayload,
  ILoginUserResponse,
  IUserResponse,
} from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://161.35.153.209:5430/api/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>(
      {
        query: (body) => ({
          url: "registrtion",
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
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useGetUserByIdQuery } = userApi;
