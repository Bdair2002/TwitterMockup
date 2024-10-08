import React from "react";
import "./AccountName.css";

const AccountName = ({ nickname, username, verified, description }) => {
  return (
    <div className="Account__name">
      <p className="Account__name-nickname">
        {nickname}{" "}
        {verified && (
          <i
            className="fa-solid fa-certificate fa-xs"
            style={{ color: "#1da1f2" }}
          ></i>
        )}
      </p>
      <p className="Account__name-username">{username}</p>

      <p className="Account__name-description">{description}</p>
    </div>
  );
};

export default AccountName;
