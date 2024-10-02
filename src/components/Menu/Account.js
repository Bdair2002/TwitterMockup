import React from "react";
import "./Account.css";

const Account = ({ user }) => {
  return (
    <div className="Account">
      <img className="Account__pfp" src={user.profilePicture} alt="PFP" />
      <div className="Account__name">
        <p className="Account__name-nickname">
          {user.nickname}{" "}
          {user.verified && (
            <i
              className="fa-solid fa-certificate fa-xs"
              style={{ color: "#1da1f2" }}
            ></i>
          )}
        </p>
        <p className="Account__name-username">{user.username}</p>
      </div>
    </div>
  );
};

export default Account;
