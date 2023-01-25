import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { fetchUserById } from "../../redux/slices/usersReducer";
import Loader from "../common/Loader/Loader";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.authMe);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(id));
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
          <ProfileInfo user={user.userById} />
          <MyPosts />
        </>
      )}
    </div>
  );
};

export default Profile;
