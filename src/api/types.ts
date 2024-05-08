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

export interface IUserResponse {
  photo: any;
  name: string;
  email: string;
  phone_number: string;
  user_id: string;
  city: string;
  reg_date: string;
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date?: any;
    city: string;
  };
}

export interface ILoginUserResponse extends IRegisterUserResponse {
  name(name: any): string;
  email(email: any): string;
}

export interface IJobResponse {
  [x: string]: any;
  name: string;
  contents: string;
  short_name: string;
  publication_date: string;
  id: string;
  isFavorite: boolean;
  page_count: string;
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
  aggregations: {};
  categories:[];
  company: [];
}

// Key | null | undefined | string | number;

export interface ICoachesResponse {
  page_count: string;
  results: string;
  message: string;
}

export interface IAddUserPhotoResponse {
  status: number;
  message: string;
}

export interface IPhotoResponse {}

export interface Company {
  [x: string]: any;
  refs: {
    f1_image: string;
    f2_image: string;
    f3_image: string;
    jobs_page: string;
    landing_page: string;
    logo_image: string;
    mini_f1_image: string;
  };
  mini_f1_image: string;
  id: number;
  page: string;
  name: string;
  industry: string;
  size: {
    name: string;
  };
  location: string;
}

export interface CoachesPayload {
  page: number;
  descending?: boolean;
  offering?: string;
  level?: string;
  specialization?: string;
  [key: string]: number | boolean | string | undefined;
}

export interface Coach {
  miniImage: string | undefined;
  id: string;
  name: string;
}
