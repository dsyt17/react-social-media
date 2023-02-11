import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  initialized: boolean;
};

const initialState: InitialStateType = {
  initialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializeApp(state: InitialStateType): void {
      state.initialized = true;
    },
  },
  extraReducers: (builder) => {},
});

export const appReducer = appSlice.reducer;
export const { initializeApp } = appSlice.actions;
