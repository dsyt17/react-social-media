import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: true,
  loginError: false,
};

export const fetchAuthMe = createAsyncThunk("authMe/fetchAuthMe", async () => {
  const response = await axios.get(`auth/me`);
  return response.data;
});

export const fetchLogin = createAsyncThunk(
  "authMe/fetchLogin",
  async ({ email, password, rememberMe = false }) => {
    const response = await axios.post("auth/login", {
      email,
      password,
      rememberMe,
    });
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
      state.isAuth = action.payload.resultCode === 0 ? true : false;
    });
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loginError = false;
      if (action.payload.resultCode === 0) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
        state.loginError = true;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchLogout.fulfilled, (state, action) => {
      if (action.payload.resultCode === 0) {
        state.isAuth = false;
        state.user = null;
      }
    });
  },
});

export const authReducer = authSlice.reducer;
