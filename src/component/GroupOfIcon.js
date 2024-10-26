import React from "react";
import Icon from "./Icon.js";

function GroupOfIcon({ folder, quantity, handleClick, shows }) {
  return (
    <div className="list">
      {/* (_, index): Array.from nhận một callback dùng để tạo các giá trị index từ 0 đến quantity - 1 */}

      {Array.from({ length: quantity }, (_, index) => {
        // .some() là một hàm array giúp kiểm tra xem ít nhất một phần tử trong mảng shows có thỏa mãn điều kiện trong hàm callback hay không
        // Nếu ít nhất một phần tử show thỏa mãn điều kiện, .some() trả về true; nếu không, trả về false

        const isSelected = shows.some(
          (show) => show.folder === folder && show.name === index + 1
        );

        return (
          <Icon
            key={index}
            folder={folder}
            quantity={index + 1}
            onClick={() => handleClick(folder, index + 1)}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
}

export default GroupOfIcon;
