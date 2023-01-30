import React from "react";
import classes from "./Loader.module.scss";
import loader from "../../../assets/loader.svg";

const Loader = () => {
  return (
    <div>
      <img className={classes.loader} src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
