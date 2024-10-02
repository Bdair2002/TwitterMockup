import React from "react";
import "./Account.css";

const Account = ({ user }) => {
  return (
    <div className="Account">
      <img className="Account__pfp" src={user.profilePicture} alt="PFP" />
      <div className="Account__name">
        <p className="Account__name-nickname">{user.nickname}</p>
        <p className="Account__name-username">{user.username}</p>
      </div>
      <p className="showMore">...</p>
    </div>
  );
};

export default Account;
