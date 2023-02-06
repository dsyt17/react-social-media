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
  const { photos, fullName, aboutMe, userId, lookingForAJob, contacts } =
    props.user[0];

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const [selectedImage, setSelectedImage] = useState(photos.large);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadPhotoError, setUploadPhotoError] = useState(false);

  const dispatch = useDispatch();

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
    <div className={classes.profileDescription}>
      <ProfilePhoto
        selectedImage={selectedImage}
        isLoading={isLoading}
        uploadPhotoError={uploadPhotoError}
        isCurrentUserPage={props.isCurrentUserPage}
        updateProfilePhoto={updateProfilePhoto}
      />

      <div>
        <h1>{fullName}</h1>
      </div>

      <div className={classes.brake} />

      <ProfileData
        editMode={editMode}
        editStatus={editStatus}
        status={status}
        updateStatus={updateStatus}
        changeStatus={changeStatus}
        lookingForAJob={lookingForAJob}
        contacts={contacts}
      />
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}:</b>{" "}
      {contactValue ? (
        <a href={contactValue} rel="noopener noreferrer" target="_blank">
          {contactValue}
        </a>
      ) : (
        "null"
      )}
    </div>
  );
};

const ProfilePhoto = ({
  selectedImage,
  isLoading,
  uploadPhotoError,
  updateProfilePhoto,
  isCurrentUserPage,
}) => {
  return (
    <>
      {isCurrentUserPage && (
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
            Change photo
          </label>
        </div>
      )}
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
    </>
  );
};

const ProfileData = ({
  editMode,
  editStatus,
  status,
  updateStatus,
  changeStatus,
  lookingForAJob,
  contacts,
}) => {
  return (
    <div className={classes.profileData}>
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

      <div>
        Looking for a job: {lookingForAJob ? <b>true</b> : <b>false</b>}
      </div>

      <div>
        Contacts:{" "}
        {Object.keys(contacts).map((key) => (
          <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
