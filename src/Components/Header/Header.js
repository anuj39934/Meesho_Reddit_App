import React, { Component } from "react";
import headerIcon from "../../Assets/images/reddit_icon.png";
import CustomDropdown from "../Dropdown/Dropdown";
import Config from "../../Constants/config";
import { CONNREFUSED } from "dns";

const Header = props => {
  return (
    <header className="header">
      <span className="app-icon">
        <img src={headerIcon} alt="icon" height="30px" width="30px" />
        <span>&nbsp;&nbsp;reddit</span>
      </span>
      <span className="subreddits">
        <CustomDropdown
          title={props.selectedCat || Config.subreddits[0]}
          options={Config.subreddits}
          clickHandler={props.clickHandler}
        />
      </span>
      <span className="user-settings">
        <CustomDropdown title="Settings" options = {Config.settingsOption}/>
      </span>
    </header>
  );
};

export default Header;
