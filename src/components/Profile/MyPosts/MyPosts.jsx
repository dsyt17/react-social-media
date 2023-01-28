import React, { createRef } from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" name="NewPost" component={"textarea"} />
      </div>
      <button>Add Post</button>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "postForm",
})(PostForm);

const MyPosts = () => {
  const posts = useSelector((state) => state.profile.posts);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={classes.content}>
      <h3>My posts</h3>
      <PostReduxForm onSubmit={onSubmit} />
      <div className={classes.posts}>
        {posts.map((e, i) => (
          <Post key={i} user={e.user} text={e.text} likesCount={e.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
