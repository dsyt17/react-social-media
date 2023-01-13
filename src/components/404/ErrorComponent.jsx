import React from "react";
import classes from "./ErrorComponent.module.scss";

const ErrorComponent = () => {
  const uri = window.location.pathname;
  return <div>{`Page ${uri} not found`}</div>;
};

export default ErrorComponent;
