import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/usersReducer";
import classes from "./Users.module.scss";

class UsersClassComponent extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        {this.users.loading ? (
          <div>Loading...</div>
        ) : (
          this.users.users[0].items.map((user, i) => (
            <div key={i}>
              <span>
                <div>
                  <img
                    alt="avatar"
                    src={user.photos.small}
                    className={classes.avatar}
                  />
                </div>
                <div>
                  <span>
                    <button>{user.followed ? "Unfollow" : "Follow"}</button>
                  </span>
                </div>
              </span>

              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status ? user.status : "No status"}</div>
                </span>
              </span>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default UsersClassComponent;
