import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  userById: [],
  isLoading: true,
  isLoadingUser: true,
  usersCount: 10,
  usersOnPage: 10,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await axios.get(
    `https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${10}`,
    {
      withCredentials: true,
      headers: {
        "API-KEY": "fecf5586-aebc-48e0-9784-e1c7e9bac676",
      },
    }
  );

  return response.data;
});

export const followUser = createAsyncThunk(
  "users/followUser",
  async (userId) => {
    const response = await axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "fecf5586-aebc-48e0-9784-e1c7e9bac676",
        },
      }
    );

    return response.data;
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async (userId) => {
    const response = await axios.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {
        withCredentials: true,
        headers: {
          "API-KEY": "fecf5586-aebc-48e0-9784-e1c7e9bac676",
        },
      }
    );

    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${id}`
    );
    return response.data;
  }
);

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
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userById = [];
      state.userById.push(action.payload);
      state.isLoadingUser = false;
    });
    builder.addCase(fetchUserById.pending, (state) => {
      state.userById = [];
      state.isLoadingUser = true;
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.userById = [{ fullName: "TestUser", photos: { small: "" } }];
      state.isLoadingUser = false;
    });
  },
});

export const usersReducer = usersSlice.reducer;
