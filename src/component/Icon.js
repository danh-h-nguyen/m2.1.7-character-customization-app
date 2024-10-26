import React from "react";

function Icon({ folder, quantity, onClick }) {
  return (
    <div className="clickable square" onClick={onClick}>
      <img
        src={`/character/${folder}/${quantity}.png`}
        alt=""
        height="60"
        class="img-center"
        style={{ top: "50%" }}
      ></img>
    </div>
  );
}

export default Icon;
