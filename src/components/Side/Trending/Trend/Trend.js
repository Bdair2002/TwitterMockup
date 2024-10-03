import React from "react";
import "./Trend.css";

const isRTL = (text) => {
  const rtlRegex =
    /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u08A0-\u08FF\uFB1D-\uFB4F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
};

const Trend = ({ trend }) => {
  const genreDisplay = trend.genre ? (
    <p className="genre">{trend.genre.join(".")}</p>
  ) : null;
  const showMore = trend.expand ? (
    <p id="showMore">
      <i className="fa-solid fa-ellipsis"></i>
    </p>
  ) : null;
  return (
    <div className="trend">
      {genreDisplay ? (
        <div className="trend__header">
          {genreDisplay}
          {showMore}
        </div>
      ) : (
        showMore
      )}
      <p className={isRTL(trend.title) ? "trend__title rtl" : "trend__title"}>
        {trend.title}
      </p>
      {trend.posts && (
        <p className="posts">{trend.posts && trend.posts + " posts"}</p>
      )}
    </div>
  );
};

export default Trend;
