import React from "react";
import ContentSuggestions from "../../Content/ContentSuggestions/ContentSuggestions";
import "./Suggestions.css";

import ShowMoreText from "../../ShowMoreText";
import data from "./data";
const Suggestions = ({ limit }) => {
  return (
    <>
      <ContentSuggestions
        data={[...data].splice(0, 3)}
        summary={true}
        Title="You might like"
      />
      <ShowMoreText />
    </>
  );
};

export default Suggestions;
