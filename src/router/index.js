import { Navigate } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import Profile from "../components/Profile/Profile";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import ErrorComponent from "../components/404/ErrorComponent";
import Users from "../components/Users/Users";

export const routes = [
  { path: "/profile", element: <Profile /> },
  { path: "/messages", element: <Messages /> },
  { path: "/messages/:id", element: <Messages /> },
  { path: "/news", element: <News /> },
  { path: "/music", element: <Music /> },
  { path: "/users", element: <Users /> },
  { path: "/settings", element: <Settings /> },
  { path: "/", element: <Navigate to="/profile" replace /> },
  { path: "/*", element: <ErrorComponent /> },
];
