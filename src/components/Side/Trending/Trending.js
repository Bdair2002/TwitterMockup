import React from "react";
import ShowMoreText from "../../ShowMoreText";
import trendingData from "./trendingData";
import Trend from "./Trend/Trend";
import "./Trending.css";
const Trending = ({ limit }) => {
  const trends = trendingData.slice(0, limit).map((trend) => (
    <li key={trend.title}>
      <Trend trend={trend} />
    </li>
  ));
  return (
    <>
      <ul>{trends}</ul>
      <ShowMoreText />
    </>
  );
};

export default Trending;
