import React from "react";
import "./Account.css";
import AccountName from "../../AccountName";
import Button from "./Button";

const Account = ({ user, showBtn }) => {
  return (
    <div className="Account">
      <img className="Account__pfp" src={user.profilePicture} alt="PFP" />
      <AccountName
        nickname={user.nickname}
        username={user.username}
        showBtn={showBtn}
        description={user.description}
        othersFollowing={user.othersFollowing}
      />
      {showBtn && <Button className="btn">Follow</Button>}
    </div>
  );
};

export default Account;
