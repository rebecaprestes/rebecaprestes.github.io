import React from "react";
export default props => {
  return (
    <div className="col-8 col-sm-2">
      <img
        src={props.link}
        alt={props.alt}
        className="rounded-circle"
        height="100"
        width="100"
      />
    </div>
  );
};
