import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm, stopSubmit } from "redux-form";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { LoginDataType } from "../../redux/slices/authReducer";
import { fetchAuthMe, fetchLogin } from "../../redux/slices/authReducer";
import { RootState } from "../../redux/store";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import classes from "./Login.module.scss";

const LoginForm = (props: any) => {
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
  const { isAuth, isLoading, loginError } = useAppSelector(
    (state: RootState) => state.authMe
  );
  const dispatch = useAppDispatch();

  const onSubmit: any = (formData: LoginDataType) => {
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

  const loginReduxFormProps = {
    disabled: isLoading,
    onSubmit: onSubmit,
  };

  return (
    <div className={classes.loginWrapper}>
      <h1>Login</h1>
      <LoginReduxForm {...loginReduxFormProps} />
    </div>
  );
};

export default Login;
