import React from "react";
import { Link } from "react-router-dom";
import classes from "./Messages.module.scss";

type DialogItemPropsType = {
  id: number;
  name: string;
};

const DialogItem: React.FC<DialogItemPropsType> = ({ id, name }) => {
  return (
    <div className={classes.dialog}>
      <Link to={`/messages/${id}`}>{name}</Link>
    </div>
  );
};
export default DialogItem;
