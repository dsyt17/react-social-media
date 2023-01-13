import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          alt="profile-header"
          height={100}
          src="https://w-dog.ru/wallpapers/12/1/511160664822260/babochek-belye-kamni-krasochnye-dizajn-marika-babochki-kamni.jpg"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
