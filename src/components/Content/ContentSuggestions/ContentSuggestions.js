import React, { Fragment } from "react";
import "./ContentSuggestions.css";

import AccountName from "../../../AccountName";
import Button from "../../Menu/Button";
const ContentSuggestions = ({ data, summary }) => {
  const arr = [...data].map((suggestion, index) => {
    return (
      <div className="ContentSuggestions" key={index}>
        {!summary && <i className="icon-col fa-solid fa-user-large fa-2xs"></i>}
        {!summary && suggestion.othersFollowing && (
          <p className="othersFollowing">
            {suggestion.othersFollowing[0]} and{" "}
            {suggestion.othersFollowing.length - 1} others follow
          </p>
        )}
        <img
          className="Account__pfp pfp-col"
          src={suggestion.profilePicture}
          alt=""
        />
        <div className="name-col">
          <AccountName
            nickname={suggestion.nickname}
            username={suggestion.username}
            verified={suggestion.verified}
          />
          <Button className="btn">Follow</Button>
        </div>
        {!summary && (
          <p className="description-col">{suggestion.description}</p>
        )}
      </div>
    );
  });

  return (
    <div>
      {!summary && <p className="content__suggestions-title">Who to follow</p>}
      {arr}
    </div>
  );
};

export default ContentSuggestions;
