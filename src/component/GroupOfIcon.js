import React from "react";
import Icon from "./Icon.js";

function GroupOfIcon({ folder }) {
  return (
    <div className="list">
      <Icon folder={folder} name="1" />
      <Icon folder={folder} name="2" />
      <Icon folder={folder} name="3" />
      <Icon folder={folder} name="4" />
      <Icon folder={folder} name="5" />
      <Icon folder={folder} name="6" />
    </div>
  );
}

export default GroupOfIcon;
