import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { GetItemsType, MyResponseType, UsersType } from "../types";

const initialState: UsersType = {
  users: [],
  userById: [],
  isLoading: true,
  isLoadingUser: true,
  usersCount: 20,
  usersOnPage: 20,
  followingInProgress: [],
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: number) => {
    const response = await axios.get<GetItemsType>(
      `users/?page=${page}&count=${20}`
    );
    return response.data;
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async (userId: number) => {
    const response = await axios.post<MyResponseType>(`follow/${userId}`, {});
    return response.data;
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async (userId: number) => {
    const response = await axios.delete(`follow/${userId}`);
    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id: number) => {
    const response = await axios.get(`profile/${id}`);
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  "users/updateUserProfile",
  async (profile) => {
    const response = await axios.put(`profile`, profile);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUserById(state) {
      state.userById = [];
      state.isLoadingUser = true;
    },
  },
  extraReducers: (builder) => {
    // Get users
    builder.addCase(fetchUsers.fulfilled, (state, action: any) => {
      state.users = [];
      state.users.push(action.payload);
      state.usersCount = action.payload.totalCount;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    // Get user by ID
    builder.addCase(fetchUserById.fulfilled, (state, action: any) => {
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
    // Update user
    builder.addCase(updateUserProfile.pending, (state, action) => {
      state.isLoadingUser = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.isLoadingUser = false;
    });
  },
});

export const usersReducer = usersSlice.reducer;
export const { clearUserById } = usersSlice.actions;
