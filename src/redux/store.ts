import { profileReducer } from "./slices/profileReducer";
import { dialogsReducer } from "./slices/dialogsReducer";
import sidebarReducer from "./slices/sidebarReducer";
import { usersReducer } from "./slices/usersReducer";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authReducer";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./slices/appReducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    // sidebar: sidebarReducer,
    users: usersReducer,
    authMe: authReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
