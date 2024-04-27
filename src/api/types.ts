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
