import React from "react";
import Icon from "./Icon.js";

function GroupOfIcon({ folder, quantity, handleClick }) {
  return (
    <div className="list">
      {/* (_, index): Array.from nhận một callback dùng để tạo các giá trị index từ 0 đến quantity - 1 */}
      {Array.from({ length: quantity }, (_, index) => (
        <Icon
          key={index}
          folder={folder}
          quantity={index + 1}
          onClick={() => handleClick(folder, index + 1)}
        />
      ))}
    </div>
  );
}

export default GroupOfIcon;
