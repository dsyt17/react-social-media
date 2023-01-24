import { profileReducer } from "./slices/profileReducer";
import { dialogsReducer } from "./slices/dialogsReducer";
import sidebarReducer from "./slices/sidebarReducer";
import { usersReducer } from "./slices/usersReducer";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    authMe: authReducer,
  },
});

export default store;
