import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { workCardUrl } from "../utils/workCardUrl";
import { CoachesPayload, Company, ICoachesResponse,  IJobResponse } from "./types";

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
    getCompanies: builder.query<Company, { page: number }>({
      query: ({ page }) => `public/companies?page=${page}`,
    }),
    getCompanyById: builder.query<Company, { id: number }>({
      query: ({ id }) => `public/companies?${id}`,
    }),
    getCoaches: builder.query<ICoachesResponse, CoachesPayload>({
      query: (args) => {
        const queryParams = new URLSearchParams();
        for (const key in args) {
          if (Object.prototype.hasOwnProperty.call(args, key)) {
            const value = args[key];
            if (value !== undefined) {
              queryParams.append(key, value.toString());
            }
          }
        }
        return `public/coaches?${queryParams.toString()}`;
      },
    }),
  }),
});
export const {
  useFindJobMutation,
  useGetJobByIdQuery,
  useGetCompaniesQuery,
  useGetCoachesQuery,
  useGetCompanyByIdQuery,
} = workCardApi;
