import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.content}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add Post</button>
      </div>
      <div className={classes.posts}>
        <Post text={"post1"} />
        <Post text={"post2"} />
        <Post text={"post3"} />
        <Post text={"post4"} />
        <Post text={"post5"} />
      </div>
    </div>
  );
};

export default MyPosts;
