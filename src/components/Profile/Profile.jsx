import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  clearUserStatus,
  deInitializeProfile,
  fetchUserStatus,
  initializeProfile,
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

  const initialProfile = (userId) => {
    const userPromise = dispatch(fetchUserById(userId));
    const statusPromise = dispatch(fetchUserStatus(userId));

    Promise.all([userPromise, statusPromise]).then(() => {
      dispatch(initializeProfile());
    });
  };

  const clearProfile = () => {
    dispatch(clearUserById());
    dispatch(clearUserStatus());
    dispatch(deInitializeProfile());
  };

  useEffect(() => {
    initialProfile(id);

    return () => {
      clearProfile();
    };
  }, []);

  // if (currentUser.isAuth === false) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      {!profileInfo.initialized ? (
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
