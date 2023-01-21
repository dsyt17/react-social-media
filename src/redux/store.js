import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
  },
});

export default store;
