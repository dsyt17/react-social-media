import React from "react";
import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          alt="profile-header"
          height={100}
          src="https://w-dog.ru/wallpapers/12/1/511160664822260/babochek-belye-kamni-krasochnye-dizajn-marika-babochki-kamni.jpg"
        />
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>new post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
