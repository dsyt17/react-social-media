import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, fetchLogout } from "../../redux/slices/authReducer";
import classes from "./Header.module.scss";

const Header = () => {
  const currentUser = useSelector((state) => state.authMe);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(fetchLogout());
  };

  return (
    <header className={classes.header}>
      <img src="./temp-logo.png" alt="logo" />
      <div className={classes.currentUser}>
        {currentUser.isAuth && currentUser.user
          ? currentUser.user.data.login
          : ""}
        {currentUser.isAuth && <button onClick={logout}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
