import React, { Fragment } from "react";
import "./ProfilePosts.css";

const ProfilePosts = ({ tweets, title, tweetLimit }) => {
  const tweetsToShow = tweets.slice(0, tweetLimit).map((tweet, index) => {
    //<i className="fa-solid fa-retweet"></i>
    return (
      <Fragment key={index}>
        {tweet.isRepost && (
          <div className="reportIcon">
            <i className="fa-solid fa-retweet"></i>
          </div>
        )}
        <div className="reposted">
          {title} {tweet.isRepost ? " reposted" : " posted"}
        </div>
        <div className="author__img">
          <img src={tweet.author.profilePicture} alt="" />
        </div>
        <div className="author__info">
          <p className="nickname">{tweet.author.nickname}</p>
          <p className="username">{tweet.author.username}</p>
          <p className="date">* {tweet.date}</p>
          <p className="ellipses">
            <i className="fa-solid fa-ellipsis"></i>
          </p>
        </div>
        <div className="tweet__content">{tweet.content}</div>
        <div className="tweet_stats">
          <div className="tweet_stats-item">
            <i className="fa-solid fa-comment-dots"></i>
            {tweet.comments}
          </div>
          <div className="tweet_stats-item">
            <i className="fa-solid fa-retweet"></i>
            {tweet.reposts}
          </div>
          <div className="tweet_stats-item">
            <i className="fa-regular fa-heart"></i>
            {tweet.likes}
          </div>
          <div className="tweet_stats-item">
            <i className="fa-solid fa-chart-simple"></i>
            {tweet.reach}
          </div>
          <div className="tweet_stats-item">
            <i className="fa-solid fa-upload"></i>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <div key="key" className="tweet">
      {tweetsToShow}
    </div>
  );
};

export default ProfilePosts;
