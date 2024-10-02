import React from "react";
import "./Container.css";

const Container = ({ children, title, className }) => {
  return (
    <div className={className ? className + " Container" : "Container"}>
      <p className="title">{title}</p>
      {children}
    </div>
  );
};

export default Container;
