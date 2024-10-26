import React from "react";

function Icon({ folder, quantity, onClick, isSelected }) {
  return (
    <div
      className={`clickable square ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img
        src={`/character/${folder}/${quantity}.png`}
        alt=""
        height="60"
        className="img-center"
        style={{ top: "50%" }}
      ></img>
    </div>
  );
}

export default Icon;
