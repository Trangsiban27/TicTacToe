import React from "react";
import "./GameStyles.css";

const Cell = (props) => {
  return (
    <div
      className={`cell ${props.value === "X" ? "is-x" : "is-o"}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Cell;
