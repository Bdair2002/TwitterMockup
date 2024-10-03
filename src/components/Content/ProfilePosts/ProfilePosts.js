import React from "react";
import "./ProfilePosts.css";
import Account from "../../Menu/Account";
const ProfilePosts = ({ tweets, title, tweetLimit }) => {
  const tweetsToShow = tweets.slice(0, tweetLimit).map((tweet) => {
    //<i className="fa-solid fa-retweet"></i>
    return (
      <>
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
          <p className="showMore">
            <i className="fa-solid fa-ellipsis"></i>
          </p>
        </div>
        <div className="tweet__content">{tweet.content}</div>
        <div className="tweet_stats">
          <div className="tweet_stats-item">
            <i class="fa-solid fa-comment-dots"></i>
            {tweet.comments}
          </div>
          <div className="tweet_stats-item">
            <i className="fa-solid fa-retweet"></i>
            {tweet.reposts}
          </div>
          <div className="tweet_stats-item">
            <i class="fa-regular fa-heart"></i>
            {tweet.likes}
          </div>
          <div className="tweet_stats-item">
            <i class="fa-solid fa-chart-simple"></i>
            {tweet.reach}
          </div>
          <div className="tweet_stats-item">
            <i class="fa-solid fa-upload"></i>
          </div>
        </div>
      </>
    );
  });
  return <div className="tweet">{tweetsToShow}</div>;
};

export default ProfilePosts;
