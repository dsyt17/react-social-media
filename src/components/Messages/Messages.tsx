import React from "react";
import classes from "./Messages.module.scss";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import { Navigate } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";
import { createField, Textarea } from "../common/FormsControls/FormsControls";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useAppSelector } from "../../hooks/hooks";

const maxLen100 = maxLengthCreator(100);

type MessageFormPropsType = {};

type MessageFormType = {
  NewMessage: string;
};

type MessageFormTypeKeys = Extract<keyof MessageFormType, string>;

const MessageForm: React.FC<
  InjectedFormProps<MessageFormType, MessageFormPropsType> &
    MessageFormPropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<MessageFormTypeKeys>(
          "New message...",
          "NewMessage",
          [requiredField, maxLen100],
          Textarea
        )}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm<MessageFormType, MessageFormPropsType>({
  form: "messagesForm",
})(MessageForm);

const Messages: React.FC = () => {
  useDocumentTitle("Messages");
  const dialogsData = useAppSelector((state) => state.dialogs);
  const isAuth = useAppSelector((state) => state.authMe.isAuth);

  const onSubmit = (formData: MessageFormType) => {
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
          {dialogsData.messages.map((e) => (
            <MessageItem key={e.id} message={e.message} />
          ))}
        </div>
        <MessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Messages;
