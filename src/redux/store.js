import { profileReducer } from "./slices/profileReducer";
import { dialogsReducer } from "./slices/dialogsReducer";
import sidebarReducer from "./slices/sidebarReducer";
import { usersReducer } from "./slices/usersReducer";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authReducer";
import { reducer as formReducer } from "redux-form";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    // sidebar: sidebarReducer,
    users: usersReducer,
    authMe: authReducer,
    form: formReducer,
  },
});

export default store;
