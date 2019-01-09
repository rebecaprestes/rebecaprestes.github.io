import React from "react";
export default props => {
  return (
    <div className="col-8 col-sm-3">
      <img
        src={props.link}
        alt={props.alt}
        className="img-fluid img-thumbnail"
        title={props.title}
      />
    </div>
  );
};
