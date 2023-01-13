import React from "react";
import classes from "./Post.module.scss";

const Post = ({ text }) => {
  return <div className={classes.item}>{text}</div>;
};

export default Post;
