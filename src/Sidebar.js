import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const renderAvatar = () => {
    if (user && user.photoUrl) {
      return (
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.displayName && user.displayName[0].toUpperCase()}
        </Avatar>
      );
    } else {
      return (
        <Avatar className="sidebar_avatar">
          {user && user.displayName && user.displayName[0].toUpperCase()}
        </Avatar>
      );
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="./colorbg.jpg" alt="backgroung color" />
        {renderAvatar()}
        <h2>
          {user && user.displayName && user.displayName[0].toUpperCase() + user.displayName.slice(1)}
        </h2>
        <h4>{user && user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">{getRandomNumber(100, 5000)}</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">{getRandomNumber(200, 1000)}</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("Software Developer")}
        {recentItem("Programming")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Sidebar;
