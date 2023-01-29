import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import useRedirect from "../../hooks/useRedirect";
import { fetchLogin } from "../../redux/slices/authReducer";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import classes from "./Login.module.scss";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div>
        <Field
          type="text"
          name="email"
          placeholder="Email"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type="text"
          name="password"
          placeholder="Password"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div className={classes.rememberMe}>
        <Field type="checkbox" name="rememberMe" component={Input} />
        Remember me
      </div>
      <div>
        <button
          disabled={props.disabled}
          className={`${classes.loginBtn} ${
            props.disabled ? classes.disabled : ""
          }`}
        >
          Login
        </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "loginForm",
})(LoginForm);

const Login = () => {
  const { isAuth, isLoading } = useSelector((state) => state.authMe);
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(fetchLogin(formData));
  };

  // useRedirect(isAuth, "messages");
  if (isAuth) {
    return <Navigate to="/messages" />;
  }

  return (
    <div className={classes.loginWrapper}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} disabled={isLoading} />
    </div>
  );
};

export default Login;
