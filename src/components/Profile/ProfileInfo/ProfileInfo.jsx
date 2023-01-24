import React from "react";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (user) => {
  const { photos, fullName } = user.user[0];
  return (
    <div>
      <div>
        <img
          alt="profile-header"
          height={300}
          width={"100%"}
          src="https://w-dog.ru/wallpapers/12/1/511160664822260/babochek-belye-kamni-krasochnye-dizajn-marika-babochki-kamni.jpg"
        />
      </div>
      <img
        alt="Avatar"
        className={classes.avatar}
        src={photos.large ? photos.large : "/user.png"}
      />
      <div className={classes.profile_description}>{fullName}</div>
    </div>
  );
};

export default ProfileInfo;
