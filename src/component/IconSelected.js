import React from "react";

function IconSelected({ folder, name, layout }) {
  return (
    <div>
      <img
        src={`/character/${folder}/${name}.png`}
        alt=""
        width="260"
        style={{
          zIndex: { layout },
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
    </div>
  );
}

export default IconSelected;
