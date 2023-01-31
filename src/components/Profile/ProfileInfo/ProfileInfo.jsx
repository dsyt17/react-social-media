import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchUserStatus,
  updateUserStatus,
} from "../../../redux/slices/profileReducer";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  const { photos, fullName, aboutMe, userId } = props.user[0];

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const dispatch = useDispatch();
  // dispatch(fetchUserStatus(userId));

  const updateStatus = (e) => {
    setStatus(e.currentTarget.value);
    dispatch(updateUserStatus(e.currentTarget.value));
    setEditMode(false);
  };

  const changeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <div>
        {/* <img
          alt="profile-header"
          height={300}
          width={"100%"}
          src="https://w-dog.ru/wallpapers/12/1/511160664822260/babochek-belye-kamni-krasochnye-dizajn-marika-babochki-kamni.jpg"
        /> */}
      </div>
      <img
        alt="Avatar"
        className={classes.avatar}
        src={photos.large ? photos.large : "/user.png"}
      />
      <div className={classes.profile_description}>
        <div>
          <h2>{fullName}</h2>
        </div>
        <div>
          {!editMode ? (
            <span onClick={() => setEditMode(true)}>
              {status ? status : "No Status"}
            </span>
          ) : (
            <input
              autoFocus={true}
              onBlur={updateStatus}
              value={status}
              onChange={changeStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
