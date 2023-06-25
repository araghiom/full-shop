import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Castle clothes</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone style={{ fontSize: 50 }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language style={{ fontSize: 50 }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings style={{ fontSize: 50 }} />
          </div>
          <img
            src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
