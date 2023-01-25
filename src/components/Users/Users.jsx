import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchUsers,
  followUser,
  unfollowUser,
} from "../../redux/slices/usersReducer";
import Loader from "../common/Loader/Loader";
import classes from "./Users.module.scss";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
    pagesArray = getPagination();
  }, [currentPage]);

  const getPagination = () => {
    const pagesCount = users.usersCount / users.usersOnPage;
    const pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
      pages.push(i);
    }
    return pages;
  };

  let pagesArray = getPagination();

  const followUnfollowUser = (user) => {
    const userId = user.id;
    user.followed
      ? dispatch(unfollowUser(userId))
      : dispatch(followUser(userId));
  };

  return (
    <div>
      <div className={classes.allPages}>
        {pagesArray.map((p, i) => (
          <span
            className={`${classes.pagination} ${
              currentPage === p ? classes.currentPage : ""
            }`}
            key={i}
            onClick={() => setCurrentPage(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {users.isLoading ? (
        <Loader />
      ) : (
        users.users[0].items.map((user, i) => (
          <div key={i}>
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
                    onClick={() => followUnfollowUser(user)}
                    disabled={
                      users.followingInProgress.some((id) => id === user.id)
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

              {/* <div>{`${user.location.city}, ${user.location.country}`}</div> */}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
