import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { MyResponseType, ResultCodeEnum } from "../types";

type InitialStateType = {
  user: { data: MeResponseDataType } | null;
  isAuth: boolean;
  isLoading: boolean;
  loginError: boolean;
};

const initialState: InitialStateType = {
  user: null,
  isAuth: false,
  isLoading: true,
  loginError: false,
};

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

export const fetchAuthMe = createAsyncThunk("authMe/fetchAuthMe", async () => {
  const response = await axios.get<MyResponseType<MeResponseDataType>>(
    `auth/me`
  );
  return response.data;
});

export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const fetchLogin = createAsyncThunk(
  "authMe/fetchLogin",
  async (data: LoginDataType) => {
    const response = await axios.post("auth/login", data);
    return response.data;
  }
);

export const fetchLogout = createAsyncThunk("authMe/fetchLogout", async () => {
  const response = await axios.delete(`auth/login`);
  return response.data;
});

const authSlice = createSlice({
  name: "authMe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuth =
        action.payload.resultCode === ResultCodeEnum.Success ? true : false;
    });
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loginError = false;
      if (action.payload.resultCode === ResultCodeEnum.Success) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
        state.loginError = true;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchLogout.fulfilled, (state, action) => {
      if (action.payload.resultCode === ResultCodeEnum.Success) {
        state.isAuth = false;
        state.user = null;
      }
    });
  },
});

export const authReducer = authSlice.reducer;
