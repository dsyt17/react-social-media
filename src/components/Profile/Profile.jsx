import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../redux/usersReducer";
import Loader from "../common/Loader/Loader";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.userById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, []);

  return (
    <div>
      {user.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo user={user} />
          <MyPosts />
        </>
      )}
    </div>
  );
};

export default Profile;
