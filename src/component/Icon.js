import React from "react";

function Icon({ folder, name }) {
  return (
    <div className="clickable square">
      <img
        src={`/character/${folder}/${name}.png`}
        alt=""
        height="60"
        class="img-center"
        style={{ top: "50%" }}
      ></img>
    </div>
  );
}

export default Icon;
