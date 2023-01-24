import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
};

// const profileReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       const newPost = {
//         id: 10,
//         message: state.newPostText,
//         likesCount: 0,
//       };
//       state.posts.push(newPost);
//       state.newPostText = "";
//       return state;

//     case UPDATE_NEW_POST_TEXT:
//       state.newPostText = action.newText;
//       return state;

//     default:
//       return state;
//   }
// };

const profileSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const profileReducer = profileSlice.reducer;
