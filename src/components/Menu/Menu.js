import React from "react";
import Account from "./Account";
import Button from "./Button";
import Logo from "./Logo";
import data from "./data";
import "./Menu.css";

const Menu = () => {
  const lists = data.map((data) => {
    return (
      <li key={data.title}>
        {data.icon}
        {data.title}
      </li>
    );
  });
  let user = {
    profilePicture: "./img/pfp.jpg",
    nickname: "Mohammad Bdair",
    username: "@MohammadBdair123",
  };
  let src = "./img/x.png";
  return (
    <div className="menu">
      <header className="logo">
        <Logo src={src} />
      </header>
      <ul>{lists}</ul>

      <Button>Post</Button>
      <footer className="menu__footer">
        <Account user={user} />
        <p className="showMore">...</p>
      </footer>
    </div>
  );
};

export default Menu;
