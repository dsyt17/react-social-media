import React, { createRef } from "react";
import { useSelector } from "react-redux";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  const posts = useSelector((state) => state.profile.posts);

  const newPostElement = createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
  };

  return (
    <div className={classes.content}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={classes.posts}>
        {posts.map((e, i) => (
          <Post key={i} user={e.user} text={e.text} likesCount={e.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
