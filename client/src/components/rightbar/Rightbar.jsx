import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar(props) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Maruf</b> and <b>3 other friends</b> birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
      return (
          <>
            <h4 className="rightbarTitle">User Information Title</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Dhaka</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Chittagong</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/1.jpeg" alt="" />
                    <span className="rightbarFollowingName">John</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/2.jpeg" alt="" />
                    <span className="rightbarFollowingName">John</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/3.jpeg" alt="" />
                    <span className="rightbarFollowingName">John</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/4.jpeg" alt="" />
                    <span className="rightbarFollowingName">John</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/5.jpeg" alt="" />
                    <span className="rightbarFollowingName">John</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/person/6.jpeg" alt="" />
                    <span className="rightbarFollowingName">John</span>
                </div>
            </div>
            </div>
          </>
      );
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
