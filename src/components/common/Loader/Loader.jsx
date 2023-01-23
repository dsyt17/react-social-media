import React from "react";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div>
      <img
        className={classes.loader}
        src="./assets/loader.svg"
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
