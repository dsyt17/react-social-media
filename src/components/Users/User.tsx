import React from "react";
import { Link } from "react-router-dom";
import { UsersType, UserType } from "../../redux/types";
import classes from "./Users.module.scss";

type UserPropsType = {
  users: UsersType;
  user: UserType;
  followUnfollowUser: (user: UserType, e: any) => void;
};

const User: React.FC<UserPropsType> = ({ users, user, followUnfollowUser }) => {
  return (
    <div>
      <span>
        <div>
          <Link to={`/profile/${user.id}`}>
            <img
              alt="avatar"
              src={user.photos.small ? user.photos.small : "/user.png"}
              className={classes.avatar}
            />
          </Link>
        </div>
        <div>
          <span>
            <button
              onClick={(e) => followUnfollowUser(user, e)}
              disabled={
                users.followingInProgress.some((id: number) => id === user.id)
                  ? true
                  : false
              }
            >
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </span>
        </div>
      </span>

      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status ? user.status : "No status"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
