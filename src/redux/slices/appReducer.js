import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  initialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializeApp(state) {
      state.initialized = true;
    },
  },
  extraReducers: (builder) => {},
});

export const appReducer = appSlice.reducer;
export const { initializeApp } = appSlice.actions;
