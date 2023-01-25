import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuth = useSelector((state) => state.authMe.isAuth);

  if (isAuth === true) {
    return <Navigate to="/messages" />;
  }
  return <h1>Login</h1>;
};

export default Login;
