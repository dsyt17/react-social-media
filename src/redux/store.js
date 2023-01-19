import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
