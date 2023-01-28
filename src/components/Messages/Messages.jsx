import React, { createRef } from "react";
import classes from "./Messages.module.scss";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" name="NewMessage" component={"textarea"} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "messagesForm",
})(MessageForm);

const Messages = () => {
  const dialogsData = useSelector((state) => state.dialogs);
  const isAuth = useSelector((state) => state.authMe.isAuth);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

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
        <MessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Messages;
