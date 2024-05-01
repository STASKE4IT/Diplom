import { ReactNode } from "react";

export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

export interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}
export interface ILoginUserResponse extends IRegisterUserResponse {
  name(name: any): string;
  email(email: any): string;
}

export interface IUserResponse {
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: string;
    city: string;
  };
}

export interface IJobResponse {
  [x: string]: any;
  levels: [];
  short_name: string;
  type: string;
  results: any;
  name: string;
  contents: string;
  company: string
}


export interface IJobPayload {
  page: string;
  page_count: number;
  items_per_page: number;
  took: number;
  timed_out: boolean; 
  total: number;
  results: []; 
  levels: [];
  aggregations: any;
  [key: string]: string | number | boolean | [] | Record<string, any>;
}

