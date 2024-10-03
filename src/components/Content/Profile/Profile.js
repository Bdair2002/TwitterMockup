import React from "react";
import "./Profile.css";
import ShowMoreText from "../../ShowMoreText";
import Button from "../../Menu/Button";
import AccountName from "../../../AccountName";
import ProfileNav from "../ProfileNav/ProfileNav";
const Profile = ({ profile, limitIcons }) => {
  return (
    <div className="Profile">
      <div className="picture">
        <img className="cover__img" src={profile.cover} alt="" />
        <img className="pfp__img" src={profile.pfp} alt="" />
      </div>
      <div className="profile__actions">
        <div className="profile__actions-item">
          <i className="action-icon fa-solid fa-ellipsis"></i>
        </div>
        <div className="profile__actions-item">
          <i className="action-icon fa-solid fa-bell fa-xs"></i>
        </div>
        <div className="profile__actions-button">
          {profile.isFollowing ? (
            <Button className="btn following">Following</Button>
          ) : (
            <Button className="btn follow">Follow</Button>
          )}
        </div>
      </div>
      <div className="profile__info">
        <ul>
          <AccountName
            nickname={profile.nickname}
            username={profile.username}
          />
          <li className="profile__info-item profile__info-description">
            {profile.description}
          </li>
          <li className="profile__info-item profile__info-link">
            <i className="fa-solid fa-link"></i> <a href="">{profile.link}</a>
            <i className="fa-regular fa-calendar-days"> </i>
            <span>Joined {profile.joined}</span>
          </li>
          <li className="profile__info-item profile__info-followers">
            <span>{profile.Following} </span>Following
            <span> {profile.Followers}</span> Followers
          </li>
          <li className="profile__info-item profile__info-followedby">
            <div className="followedByIcons">
              {profile.FollowedBy.slice(0, limitIcons).map((person, index) => (
                <img
                  className="follower-icon"
                  src={person.pfp}
                  style={{ right: index * 8 + "px" }}
                ></img>
              ))}
            </div>
            Followed By
            {profile.FollowedBy.slice(0, 2)
              .map((person) => person.nickname)
              .join(", ")}
            {profile.FollowedBy.length > 2 && ", and "}{" "}
            {profile.FollowedBy.length - 2} others you follow
          </li>
        </ul>
      </div>
      <ProfileNav />
    </div>
  );
};

export default Profile;
