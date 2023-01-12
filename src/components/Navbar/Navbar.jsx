import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link to="/">Profile</Link>
      </div>
      <div className={classes.item}>
        <Link to="/">Messages</Link>
      </div>
      <div className={classes.item}>
        <Link to="/">News</Link>
      </div>
      <div className={classes.item}>
        <Link to="/">Music</Link>
      </div>
      <div className={classes.item}>
        <Link to="/">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
