import React from "react";
import "./Logo.css";

const Logo = ({ src }) => {
  return <img src={src} alt="" className="logo__img" />;
};

export default Logo;
