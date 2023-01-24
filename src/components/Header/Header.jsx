import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/authReducer";
import classes from "./Header.module.scss";

const Header = () => {
  const currentUser = useSelector((state) => state.authMe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <header className={classes.header}>
      <img src="./temp-logo.png" alt="logo" />
      <div className={classes.currentUser}>
        {currentUser.isAuth ? currentUser.user.data.login : ""}
      </div>
    </header>
  );
};

export default Header;
