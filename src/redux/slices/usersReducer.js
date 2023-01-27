import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  users: [],
  userById: [],
  isLoading: true,
  isLoadingUser: true,
  usersCount: 10,
  usersOnPage: 10,
  followingInProgress: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await axios.get(`users/?page=${page}&count=${10}`);
  return response.data;
});

export const followUser = createAsyncThunk(
  "users/followUser",
  async (userId) => {
    const response = await axios.post(`follow/${userId}`, {});
    return response.data;
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async (userId) => {
    const response = await axios.delete(`follow/${userId}`);
    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await axios.get(`profile/${id}`);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get users
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [];
      state.users.push(action.payload);
      state.usersCount = action.payload.totalCount;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    // Get user by ID
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userById = [];
      state.userById.push(action.payload);
      state.isLoadingUser = false;
    });
    builder.addCase(fetchUserById.pending, (state) => {
      state.userById = [];
      state.isLoadingUser = true;
    });
    // Follow / Unfollow
    builder.addCase(followUser.pending, (state, action) => {
      state.followingInProgress = [
        ...state.followingInProgress,
        action.meta.arg,
      ];
    });
    builder.addCase(followUser.fulfilled, (state, action) => {
      state.followingInProgress = state.followingInProgress.filter(
        (id) => id !== action.meta.arg
      );
    });
    builder.addCase(unfollowUser.pending, (state, action) => {
      state.followingInProgress = [
        ...state.followingInProgress,
        action.meta.arg,
      ];
    });
    builder.addCase(unfollowUser.fulfilled, (state, action) => {
      state.followingInProgress = state.followingInProgress.filter(
        (id) => id !== action.meta.arg
      );
    });
  },
});

export const usersReducer = usersSlice.reducer;
