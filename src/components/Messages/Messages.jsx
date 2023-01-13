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

const Message = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

const Messages = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <DialogItem id={1} name="Igor" />
        <DialogItem id={3} name="Vadim" />
        <DialogItem id={2} name="Dima" />
        <DialogItem id={4} name="Ilya" />
        <DialogItem id={5} name="Vasya" />
      </div>
      <div className={classes.chat}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="Im here!" />
      </div>
    </div>
  );
};

export default Messages;
