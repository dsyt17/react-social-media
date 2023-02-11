import { createSlice } from "@reduxjs/toolkit";

type Dialog = {
  id: number;
  name: string;
};

type Message = {
  id: number;
  message: string;
};

type InitialStateType = {
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  newMessageBody: string;
};

const initialState: InitialStateType = {
  dialogs: [
    { id: 1, name: "Igor" },
    { id: 2, name: "Vadim" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Ilya" },
    { id: 5, name: "Vasya" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "lol" },
    { id: 3, message: "Hello world" },
    { id: 4, message: "Im here" },
    { id: 5, message: "i Vasya shiiit" },
  ],
  newMessageBody: "",
};

const dialogsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const dialogsReducer = dialogsSlice.reducer;
