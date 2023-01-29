import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import classes from "./Login.module.scss";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div>
        <Field
          type="text"
          name="Login"
          placeholder="Login"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type="text"
          name="Password"
          placeholder="Password"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div className={classes.rememberMe}>
        <Field type="checkbox" name="RememberMe" component={Input} />
        Remember me
      </div>
      <div>
        <button className={classes.loginBtn}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "loginForm",
})(LoginForm);

const Login = () => {
  const isAuth = useSelector((state) => state.authMe.isAuth);
  const onSubmit = (formData) => {
    console.log(formData);
  };

  if (isAuth === true) {
    return <Navigate to="/messages" />;
  }
  return (
    <div className={classes.loginWrapper}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
