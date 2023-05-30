import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  const renderAvatar = () => {
    if (avatar && user) {
      if (user.photoUrl) {
        return (
          <Avatar className="headerOption_icon" src={user.photoUrl}>
            {user.displayName && user.displayName[0].toUpperCase()}
          </Avatar>
        );
      } else if (user.displayName) {
        return (
          <Avatar className="headerOption_icon">
            {user.displayName[0].toUpperCase()}
          </Avatar>
        );
      }
    }
    return null;
  };

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {renderAvatar() || (!Icon && <Avatar className="headerOption_icon" />)}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
