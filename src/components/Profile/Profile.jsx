import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
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
  useDocumentTitle("Profile");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const profileInfo = useSelector((state) => state.profile);
  const authMe = useSelector((state) => state.authMe);

  let { id } = useParams();

  const isCurrentUserPage =
    authMe.isAuth && id == authMe.user.data.id ? true : false;

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
  }, [id]);

  return (
    <div>
      {!profileInfo.initialized ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo
            isCurrentUserPage={isCurrentUserPage}
            user={user.userById}
            status={profileInfo.status}
          />
          <MyPosts />
        </>
      )}
    </div>
  );
};

export default Profile;
