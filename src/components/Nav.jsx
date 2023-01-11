import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <Link to="/">Profile</Link>
      </div>
      <div>
        <Link to="/">Messages</Link>
      </div>
      <div>
        <Link to="/">News</Link>
      </div>
      <div>
        <Link to="/">Music</Link>
      </div>
      <div>
        <Link to="/">Settings</Link>
      </div>
    </nav>
  );
};

export default Nav;
