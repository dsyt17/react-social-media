import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: true,
  usersCount: 10,
  usersOnPage: 10,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await axios.get(
    `https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${10}`
  );

  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [];
      state.users.push(action.payload);
      state.usersCount = action.payload.totalCount;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const usersReducer = usersSlice.reducer;
