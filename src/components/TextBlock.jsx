import React from "react";
import "./Style.css";

export default props => {
  return (
    <div id={props.id} className="purple-color space-50">
      <h2 className="text-white">{props.title}</h2>
      <p className="text-white">{props.text}</p>
    </div>
  );
};
