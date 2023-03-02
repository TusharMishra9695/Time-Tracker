import React, { memo } from "react";

function TaskList() {
  let localContent = JSON.parse(localStorage.getItem("arrayList"));
  return (
    <div>
      {localContent.map((item, index) => {
        return (
          <div key={index} className="inner_flex list">
            <span>{item.title}</span>
            <span>{item.calTime}</span>
          </div>
        );
      })}
    </div>
  );
}
export default memo(TaskList);
