import React from "react";
import "./Suggestions.css";
import Account from "../../Menu/Account";
import Button from "../../Menu/Button";
import ShowMoreText from "../../ShowMoreText";
const Suggestions = ({ limit }) => {
  //limit is a state
  const data = [
    {
      profilePicture: "./img/tailwind.png",
      nickname: "Tailwind CSS",
      username: "@tailwindcs",
      verified: true,
    },
    {
      profilePicture: "./img/typescript.png",
      nickname: "TypeScript",
      username: "@typescript",
      verified: false,
    },
    {
      profilePicture: "./img/freecodecamp.png",
      nickname: "freeCodeCamp.org",
      username: "@freeCodeCamp",
      verified: true,
    },
    {
      profilePicture: "./img/javascript.png",
      nickname: "JavaScript",
      username: "@javascript",
      verified: false,
    },
  ];

  const limitedSuggestions = data.slice(0, limit);
  const shownSuggestions = limitedSuggestions.map((suggestion) => (
    <li key={suggestion.username} className="suggestion__item">
      <Account user={suggestion} />
      <Button>Follow</Button>
    </li>
  ));

  return (
    <>
      <ul className="suggestions">{shownSuggestions}</ul>
      <ShowMoreText />
    </>
  );
};

export default Suggestions;
