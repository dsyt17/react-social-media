import React from "react";
import classes from "./Messages.module.scss";

type MessageItemPropsType = {
  message: string;
};

const MessageItem: React.FC<MessageItemPropsType> = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

export default MessageItem;
