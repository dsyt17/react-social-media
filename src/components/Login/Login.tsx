import React from "react";
import { Navigate } from "react-router-dom";
import { InjectedFormProps, reduxForm, stopSubmit } from "redux-form";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { LoginDataType } from "../../redux/slices/authReducer";
import { fetchAuthMe, fetchLogin } from "../../redux/slices/authReducer";
import { RootState } from "../../redux/store";
import { requiredField } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import classes from "./Login.module.scss";

type LoginFormOwnProps = {
  disabled: boolean;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div>
        {createField<LoginFormValuesTypeKeys>(
          "Email",
          "email",
          [requiredField],
          Input
        )}
      </div>
      <div>
        {createField<LoginFormValuesTypeKeys>(
          "Password",
          "password",
          [requiredField],
          Input,
          "password"
        )}
      </div>
      <div className={classes.rememberMe}>
        {createField<LoginFormValuesTypeKeys>(
          undefined,
          "rememberMe",
          [],
          Input,
          "checkbox"
        )}
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

export type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoginFormValuesTypeKeys = keyof LoginFormValuesType;

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
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
