import { Navigate } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import Profile from "../components/Profile/Profile";
import ErrorComponent from "../components/404/ErrorComponent";
import Users from "../components/Users/Users";
import Login from "../components/Login/Login";
import React, { Suspense } from "react";

const Settings = React.lazy(() => import("../components/Settings/Settings"));
const Music = React.lazy(() => import("../components/Music/Music"));
const News = React.lazy(() => import("../components/News/News"));

type SimpleSuspenseProps = {
  Component: React.FC<Object>;
};

const SimpleSuspense: React.FC<SimpleSuspenseProps> = ({ Component }) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};

export const routes = [
  { path: "/", element: <Navigate to="/news" replace /> },
  { path: "/*", element: <ErrorComponent /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/:id", element: <Profile /> },
  { path: "/login", element: <Login /> },
  { path: "/messages", element: <Messages /> },
  { path: "/messages/:id", element: <Messages /> },
  { path: "/users", element: <Users /> },
  {
    path: "/news",
    element: <SimpleSuspense Component={News} />,
  },
  {
    path: "/music",
    element: <SimpleSuspense Component={Music} />,
  },
  {
    path: "/settings",
    element: <SimpleSuspense Component={Settings} />,
  },
];
