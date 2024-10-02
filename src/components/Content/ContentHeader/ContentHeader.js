import React from "react";
import "./ContentHeader.css";
const ContentHeader = ({ title, posts }) => {
  return (
    <div className="content__header">
      <p className="content__header-title">{title}</p>
      <p className="content__header-posts">{posts}</p>
    </div>
  );
};

export default ContentHeader;
