import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  clearUserStatus,
  fetchUserStatus,
} from "../../redux/slices/profileReducer";
import { clearUserById, fetchUserById } from "../../redux/slices/usersReducer";
import Loader from "../common/Loader/Loader";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const profileInfo = useSelector((state) => state.profile);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
    dispatch(fetchUserStatus(id));

    return () => {
      dispatch(clearUserById());
      dispatch(clearUserStatus());
      console.log("profile unmount");
    };
  }, []);

  // if (currentUser.isAuth === false) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      {user.isLoadingUser ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo user={user.userById} status={profileInfo.status} />
          <MyPosts />
        </>
      )}
    </div>
  );
};

export default Profile;
