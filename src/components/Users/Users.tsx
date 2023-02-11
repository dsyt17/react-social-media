import React, { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import {
  fetchUsers,
  followUser,
  unfollowUser,
} from "../../redux/slices/usersReducer";
import { UserType } from "../../redux/types";
import Loader from "../common/Loader/Loader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users: React.FC = () => {
  useDocumentTitle("Users");

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesCount: number = Math.ceil(users.usersCount / users.usersOnPage);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [currentPage, dispatch]);

  const followUnfollowUser = (user: UserType, e: any) => {
    const userId = user.id ? user.id : 0;
    user.followed
      ? dispatch(unfollowUser(userId))
      : dispatch(followUser(userId));
    if (e.target.innerText === "Unfollow") {
      e.target.innerText = "Follow";
    } else {
      e.target.innerText = "Unfollow";
    }
  };

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={pagesCount}
      />
      {users.isLoading ? (
        <Loader />
      ) : (
        users.users[0].items.map((user: UserType) => (
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
