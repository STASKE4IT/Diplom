import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { workCardUrl } from "../utils/workCardUrl";
import { ICompaniesResponse, IJobResponse } from "./types";

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
    getCompanies: builder.query<ICompaniesResponse, string>({
      query: () => `public/companies`,
    }),
  }),
});
export const { useFindJobMutation, useGetJobByIdQuery, useGetCompaniesQuery } = workCardApi;
