import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateUserPhoto,
  updateUserStatus,
} from "../../../redux/slices/profileReducer";
import Loader from "../../common/Loader/Loader";

import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
  const { photos, fullName, aboutMe, userId } = props.user[0];

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const [selectedImage, setSelectedImage] = useState(photos.large);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadPhotoError, setUploadPhotoError] = useState(false);

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

  const editStatus = () => {
    if (props.isCurrentUserPage) {
      setEditMode(true);
    }
  };
  const updateProfilePhoto = async (e) => {
    if (e.target.files.length) {
      const oldImage = selectedImage;
      setSelectedImage(null);
      setUploadPhotoError(false);
      setIsLoading(true);
      const res = await dispatch(updateUserPhoto(e.target.files[0]));
      try {
        setSelectedImage(res.payload.data.photos.large);
      } catch (error) {
        setUploadPhotoError(true);
        setSelectedImage(oldImage);
      }
      setIsLoading(false);
    }
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
      <div className={classes.profile_description}>
        <div className={classes.center}>
          <img
            alt="Avatar"
            className={classes.avatar}
            src={selectedImage || "/user.png"}
          />
        </div>

        {isLoading && (
          <div className={classes.centerLoader}>
            <Loader />
            <div>Photo loading...</div>
          </div>
        )}

        {uploadPhotoError && (
          <div className={classes.uploadError}>Upload error</div>
        )}

        {props.isCurrentUserPage && (
          <div className={classes.chosePhotoBlock}>
            <input
              type="file"
              className={classes.hidden}
              name="myImage"
              id="file"
              onChange={updateProfilePhoto}
            />
            <label
              className={`${classes.chosePhoto} ${
                isLoading ? classes.hidden : ""
              }`}
              htmlFor="file"
            >
              Chose photo
            </label>
          </div>
        )}
        <div>
          <h2>{fullName}</h2>
        </div>
        <div>
          {!editMode ? (
            <span onClick={editStatus}>{status || "No Status"}</span>
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
