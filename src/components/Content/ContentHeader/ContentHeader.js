import React from "react";
import "./ContentHeader.css";
const ContentHeader = ({ title, posts }) => {
  return (
    <div className="content__header">
      <i
        className="content__header-arrow fa-solid fa-arrow-left-long fa-xs"
        style={{ color: "#ffffff" }}
      ></i>
      <div className="content__header-text">
        <p className="content__header-title">{title}</p>
        <p className="content__header-posts">{posts ? posts : 0} Posts</p>
      </div>
    </div>
  );
};

export default ContentHeader;
