import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MessageIcon,
  MusicIcon,
  NewsIcon,
  ProfileIcon,
  SettingsIcon,
  UsersIcon,
} from "../common/Icons/Icons";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const currentUser = useSelector((state) => state.authMe);

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link
          to={
            currentUser.isAuth
              ? `/profile/${currentUser.user.data.id}`
              : "/login"
          }
        >
          <ProfileIcon />
          <span>{currentUser.isAuth ? "Profile" : "Login"}</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/news">
          <NewsIcon />
          <span>News</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/messages">
          <MessageIcon />
          <span>Messages</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/users">
          <UsersIcon />
          <span>Users</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/music">
          <MusicIcon />
          <span>Music</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/settings">
          <SettingsIcon />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
