import React from "react";
import "./Account.css";
import AccountName from "../../AccountName";

const Account = ({ user }) => {
  return (
    <div className="Account">
      <img className="Account__pfp" src={user.profilePicture} alt="PFP" />
      <AccountName nickname={user.nickname} username={user.username} />
    </div>
  );
};

export default Account;
