import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import {
  fetchUsers,
  followUser,
  unfollowUser,
} from "../../redux/slices/usersReducer";
import Loader from "../common/Loader/Loader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = () => {
  useDocumentTitle("Users");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(users.usersCount / users.usersOnPage);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [currentPage, dispatch]);

  const followUnfollowUser = (user, e) => {
    const userId = user.id;
    user.followed
      ? dispatch(unfollowUser(userId))
      : dispatch(followUser(userId));

    if (e.target.innerText === "Unfollow") {
      e.target.innerText = "Follow";
    } else {
      e.target.innerText = "Unfollow";
    }
  };

  console.log("r");

  return (
    <div>
      <Paginator
        users={users}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
      />
      {users.isLoading ? (
        <Loader />
      ) : (
        users.users[0].items.map((user) => (
          <User
            key={user.id}
            user={user}
            users={users}
            followUnfollowUser={followUnfollowUser}
          />
        ))
      )}
    </div>
  );
};

export default Users;
