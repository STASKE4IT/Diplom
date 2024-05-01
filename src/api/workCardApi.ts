import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { workCardUrl } from "../utils/workCardUrl";
import { IJobResponse } from "./types";

export interface IJobPayload {
  page_count: string;
  page: string;
  [key: string]: string;
}

export const workCardApi = createApi({
  reducerPath: "workCardApi",
  baseQuery: fetchBaseQuery({ baseUrl: workCardUrl }),
  endpoints: (builder) => ({
    findJob: builder.mutation<IJobResponse, IJobPayload>({
      query: (body) => {
        const queryParams = new URLSearchParams();
        for (const key in body) {
          if (Object.prototype.hasOwnProperty.call(body, key)) {
            queryParams.append(key, body[key]);
          }
        }
        return {
          url: `public/jobs?${queryParams.toString()}`,
          method: "GET",
        };
      },
    }),
    getJobById: builder.query<IJobResponse, number>({
      query: (id) => `public/jobs/${id}`,
    }),
  }),
});
export const { useFindJobMutation, useGetJobByIdQuery } = workCardApi;
