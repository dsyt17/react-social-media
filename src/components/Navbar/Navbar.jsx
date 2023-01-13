import React from "react";
import { Link } from "react-router-dom";
import {
  MessageIcon,
  MusicIcon,
  NewsIcon,
  ProfileIcon,
  SettingsIcon,
} from "../Icons/Icons";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link to="/">
          <ProfileIcon />
          <span>Profile</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/">
          <MessageIcon />
          <span>Messages</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/">
          <NewsIcon />
          <span>News</span>{" "}
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/">
          <MusicIcon />
          <span>Music</span>
        </Link>
      </div>
      <div className={classes.item}>
        <Link to="/">
          <SettingsIcon />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
