import React, { createRef } from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    { id: 1, user: "Igor", text: "post1", likesCount: 2 },
    { id: 2, user: "Igor", text: "post2", likesCount: 6 },
    { id: 3, user: "Igor", text: "post3", likesCount: 42 },
    { id: 4, user: "Igor", text: "post4", likesCount: 77 },
    { id: 5, user: "Igor", text: "post5", likesCount: 112 },
  ];

  const newPostElement = createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    postsData.push({ id: 5, user: "Igor", text, likesCount: 0 });
    console.log(postsData);
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
        {postsData.map((e, i) => (
          <Post key={i} user={e.user} text={e.text} likesCount={e.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
