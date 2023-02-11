import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../redux/slices/authReducer.ts";
import classes from "./Header.module.scss";
import logo from "../../assets/temp-logo.png";

const Header = () => {
  const currentUser = useSelector((state) => state.authMe);
  const dispatch = useDispatch();

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
