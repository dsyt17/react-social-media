import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../redux/slices/usersReducer";
import Loader from "../common/Loader/Loader";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const defaultUser = [{ fullName: "TestUser", photos: { small: "" } }];

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  // const currentUser = useSelector((state) => state.authMe);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);

  return (
    <div>
      {user.isLoadingUser ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo user={id ? user.userById : defaultUser} />
          <MyPosts />
        </>
      )}
    </div>
  );
};

export default Profile;
