import React from "react";
import { fetchLogout } from "../../redux/slices/authReducer";
import classes from "./Header.module.scss";
import logo from "../../assets/temp-logo.png";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Header = () => {
  const currentUser = useAppSelector((state) => state.authMe);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(fetchLogout());
  };

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <div className={classes.currentUser}>
        {currentUser.isAuth && currentUser.user
          ? currentUser.user.data.login
          : ""}
        {currentUser.isAuth && (
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
