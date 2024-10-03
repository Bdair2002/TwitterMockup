import React from "react";
import NavItem from "./NavItem";
import "./ProfileNav.css";
const ProfileNav = () => {
  const nav = ["Posts", "Replies", "Media", "Likes"].map((navitem, index) => (
    <li className={index === 0 ? "selected navItem__text" : "navItem__text"}>
      <NavItem navitem={navitem} />
    </li>
  ));
  return (
    <div>
      <ul className="ProfileNav">{nav}</ul>
    </div>
  );
};

export default ProfileNav;
