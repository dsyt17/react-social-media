import React, { createRef } from "react";
import classes from "./Messages.module.scss";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";

const Messages = () => {
  const newMessage = createRef();
  const dialogsData = useSelector((state) => state.dialogs);

  const sendMessage = () => {
    const message = newMessage.current.value;
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        {dialogsData.dialogs.map((e, i) => (
          <DialogItem key={i} id={e.id} name={e.name} />
        ))}
      </div>
      <div className={classes.chat}>
        <div>
          {dialogsData.messages.map((e, i) => (
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
