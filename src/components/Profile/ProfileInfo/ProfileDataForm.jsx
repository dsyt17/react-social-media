import classes from "./ProfileInfo.module.scss";
import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({
  status,
  lookingForAJob,
  handleSubmit,
  aboutMe,
  contacts,
}) => {
  return (
    <form onSubmit={handleSubmit} className={classes.profileData}>
      <div>
        <b>Status:</b>
        {createField("Status", "status", [], Input, { value: status })}
      </div>

      <div>
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>

      <div>
        <b>About me:</b>
        {createField("About Me", "aboutMe", [], Textarea)}
      </div>

      <div>
        Contacts:
        {Object.keys(contacts).map((key) => (
          <div className={classes.contact}>
            <b>
              {key}: {createField(key, "contacts." + key, [], Input)}
            </b>
          </div>
        ))}
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

const ProfileReduxForm = reduxForm({
  form: "profileForm",
})(ProfileDataForm);

export default ProfileReduxForm;
