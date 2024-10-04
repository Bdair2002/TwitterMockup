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
      <div className="side__footer">
        <ul className="side__footer-list">
          <li>Terms Of Service</li>
          <li> Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Accessibility</li>
          <li>Ads info</li>
          <li>
            More{" "}
            <span className="ellipses">
              {" "}
              <i className="action-icon fa-solid fa-ellipsis"></i>
            </span>
          </li>
          <li>R 2023 X Corp.</li>
        </ul>
      </div>
    </div>
  );
};

export default Side;
