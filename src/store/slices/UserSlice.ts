import { createSlice } from "@reduxjs/toolkit";

interface IUserSliceState {
  user: IUser | null;
}

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
  userPhoto: string;
}

const initialState: IUserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    changeUser(state, action) {
      console.log("Новые данные пользователя", action.payload);
      
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;
