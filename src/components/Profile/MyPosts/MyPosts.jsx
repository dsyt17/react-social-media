import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addPost } from "../../../redux/slices/profileReducer";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const maxLen100 = maxLengthCreator(100);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField, maxLen100]}
          type="text"
          name="postText"
          component={Textarea}
        />
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
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(
      addPost({ id: 99, user: "Igor", text: formData.postText, likesCount: 42 })
    );
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
