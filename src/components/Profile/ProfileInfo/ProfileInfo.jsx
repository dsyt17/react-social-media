import React from "react";
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = (user) => {
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
      <div className={classes.profile_description}>{user.user[0].fullName}</div>
    </div>
  );
};

export default ProfileInfo;
