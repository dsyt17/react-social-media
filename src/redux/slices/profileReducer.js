import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT-POST";

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
  name: "posts",
  initialState,
  reducers: {
    clearUserStatus(state) {
      state.status = "";
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
export const { clearUserStatus } = profileSlice.actions;
