import React from "react";
import classes from "./Messages.module.scss";

const MessageItem = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

export default MessageItem;
