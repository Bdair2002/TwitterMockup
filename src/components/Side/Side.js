import React from "react";
import "./Side.css";
import Searchbar from "./SearchBar/Searchbar";
import Suggestions from "./Suggestions/Suggestions";
import Trending from "./Trending/Trending";
import Container from "./Container/Container";
const Side = () => {
  return (
    <div className="side">
      <div className="searchBar">
        <Searchbar />
      </div>
      <Container title="You might like" className="Suggestions">
        <Suggestions limit="3" summary={true} />
      </Container>
      <Container title="Trends for you" className="trends">
        <Trending limit="10" />
      </Container>
      <div className="side__footer"></div>
    </div>
  );
};

export default Side;
