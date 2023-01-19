import React, { createRef } from "react";
import classes from "./Messages.module.scss";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";

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

  const newMessage = createRef();

  const sendMessage = () => {
    const message = newMessage.current.value;
    messagesData.push({ id: 99, message });
    console.log(messagesData);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        {dialogsData.map((e, i) => (
          <DialogItem key={i} id={e.id} name={e.name} />
        ))}
      </div>
      <div className={classes.chat}>
        <div>
          {messagesData.map((e, i) => (
            <MessageItem key={i} id={e.id} message={e.message} />
          ))}
        </div>
        <div>
          <div>
            <textarea ref={newMessage} />
          </div>
          <div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
