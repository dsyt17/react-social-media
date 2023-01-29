import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm, stopSubmit } from "redux-form";
import { fetchAuthMe, fetchLogin } from "../../redux/slices/authReducer";
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
      {props.error && <div className={classes.formError}>{props.error}</div>}
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
  const { isAuth, isLoading, loginError } = useSelector(
    (state) => state.authMe
  );
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(fetchLogin(formData));
  };

  if (loginError) {
    dispatch(stopSubmit("loginForm", { _error: "Wrong email or password" }));
  }

  // useRedirect(isAuth, "messages");
  if (isAuth) {
    dispatch(fetchAuthMe());
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
