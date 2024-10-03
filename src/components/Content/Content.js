import React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import Profile from "./Profile/Profile";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import "./Content.css";
const Content = () => {
  const profile = {
    cover: "./img/react-cover.png",
    pfp: "./img/react.png",
    nickname: "React",
    username: "@reactjs",
    description: "The library for web and native user interfaces",
    link: "react.dev",
    joined: "July 2013",
    isFollowing: true,
    Following: "267",
    Followers: "708.1K",
    FollowedBy: [
      { nickname: "Mohammad Kukhun", pfp: "/img/person1.png" },
      { nickname: "Yazan Alsade", pfp: "/img/person2.png" },
      { nickname: "some Random Guy", pfp: "/img/person3.png" },
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ], // 16
  };
  const profiletitle = "React";
  const profilePostsCount = "2,611";
  const ProfileTweets = [
    {
      isRepost: true,
      author: {
        profilePicture: "./img/person1.png",
        nickname: "danabramov.bsky.social",
        username: "@dan_abramov",
      },
      date: "May 29",
      content: "happy 10th birthday to @reactjs!🍰⚛️",
      comments: "46",
      reposts: "675",
      likes: "3,701",
      reach: "1.1M",
    },
  ];

  return (
    <div className="content">
      <ContentHeader title={profiletitle} posts={profilePostsCount} />
      <Profile profile={profile} limitIcons={3} />
      <ProfilePosts
        tweets={ProfileTweets}
        title={profiletitle}
        tweetLimit="1"
      />
    </div>
  );
};

export default Content;
