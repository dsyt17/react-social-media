import React from "react";
import { useSelector } from "react-redux";
import classes from "./Users.module.scss";

const Users = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>
          <span>
            <div>
              <img alt="avatar" src={user.imgSrc} className={classes.avatar} />
            </div>
            <div>
              <span>
                <button>{user.followed ? "Unfollow" : "Follow"}</button>
              </span>
            </div>
          </span>

          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>

            <div>{`${user.location.city}, ${user.location.country}`}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
