import React from "react";
import classes from "./Post.module.scss";

const Post = ({ text, user, id, likesCount }) => {
  return (
    <div className={classes.item}>
      <div>{user}</div>
      <div className={classes.post_text}>{text}</div>
      <div>Likes: {likesCount}</div>
    </div>
  );
};

export default Post;
