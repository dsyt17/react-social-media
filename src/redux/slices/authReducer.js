import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: true,
};

export const fetchAuthMe = createAsyncThunk("authMe/fetchAuthMe", async () => {
  const response = await axios.get(`auth/me`);
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
  },
});

export const authReducer = authSlice.reducer;
