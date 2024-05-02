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
  photo: any;
  name: string;
  email: string;
  phone_number: string;
  user_id: string;
  city: string;
  reg_date: string;
  user_photo(user_photo: any): string;
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

export interface IJobResponse {
  [x: string]: any;
  name: any;
  contents: string;
  short_name: string;
  levels: any;
  publication_date: string;
  id: any;
  company: any;
  isFavorite: boolean;
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

export interface IAddUserPhotoResponse{
    user_photo(user_photo: any): any;
    status: number,
    message: string,
    }

    export interface IPhotoResponse{

    }