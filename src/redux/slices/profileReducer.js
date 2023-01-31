import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  posts: [
    { id: 1, user: "Igor", text: "post1", likesCount: 2 },
    { id: 2, user: "Igor", text: "post2", likesCount: 6 },
    { id: 3, user: "Igor", text: "post3", likesCount: 42 },
    { id: 4, user: "Igor", text: "post4", likesCount: 77 },
    { id: 5, user: "Igor", text: "post5", likesCount: 112 },
  ],
  newPostText: "",
  status: "",
  isLoading: true,
  initialized: false,
};

export const fetchUserStatus = createAsyncThunk(
  "users/fetchUserStatus",
  async (id) => {
    const response = await axios.get(`profile/status/${id}`);
    return response.data;
  }
);

export const updateUserStatus = createAsyncThunk(
  "users/updateUserStatus",
  async (status) => {
    const response = await axios.put(`profile/status`, {
      status,
    });
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearUserStatus(state) {
      state.status = "";
    },
    initializeProfile(state) {
      state.initialized = true;
    },
    deInitializeProfile(state) {
      state.initialized = false;
    },
    // temp
    addPost(state, action) {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.status = action.payload;
      state.isLoading = false;
    });
  },
});

export const profileReducer = profileSlice.reducer;
export const {
  clearUserStatus,
  initializeProfile,
  deInitializeProfile,
  addPost,
} = profileSlice.actions;
