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
  const dialogsData = [
    { id: 1, name: "Igor" },
    { id: 2, name: "Vadim" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Ilya" },
    { id: 5, name: "Vasya" },
  ];

  const messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "lol" },
    { id: 3, message: "Hello world" },
    { id: 4, message: "Im here" },
    { id: 5, message: "i Vasya shiiit" },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        {dialogsData.map((e, i) => (
          <DialogItem key={i} id={e.id} name={e.name} />
        ))}
      </div>
      <div className={classes.chat}>
        {messagesData.map((e, i) => (
          <Message key={i} id={e.id} message={e.message} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
