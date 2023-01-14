import React from "react";
import { Link } from "react-router-dom";
import classes from "./Messages.module.scss";
const DialogItem = ({ id, name }) => {
  return (
    <div className={classes.dialog}>
      <Link to={`/messages/${id}`}>{name}</Link>
    </div>
  );
};
export default DialogItem;
