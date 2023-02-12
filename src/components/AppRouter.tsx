import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
