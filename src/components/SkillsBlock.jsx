import React from "react";
import ImageRound from "../imageTypes/ImageRound";
import img001 from "../images/skill/html5.png";
import img002 from "../images/skill/css3.png";
import img003 from "../images/skill/javascript.png";
import img004 from "../images/skill/jquery.png";
import img005 from "../images/skill/wordpress.png";
import img006 from "../images/skill/reactjs.jpg";
import img007 from "../images/skill/bootstrap.png";
import "./Style.css";

export default props => {
  const img01 = {
    link: img001,
    alt: "img02"
  };

  const img02 = {
    link: img002,
    alt: "img02"
  };

  const img03 = {
    link: img003,
    alt: "img02"
  };

  const img04 = {
    link: img004,
    alt: "img02"
  };

  const img05 = {
    link: img005,
    alt: "img02"
  };

  const img06 = {
    link: img006,
    alt: "img02"
  };

  const img07 = {
    link: img007,
    alt: "img02"
  };

  return (
    <div id={props.id} className="space-50">
      <h2>{props.title}</h2>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <ImageRound {...img01} />
              <ImageRound {...img02} />
              <ImageRound {...img03} />
              <ImageRound {...img04} />
              <ImageRound {...img05} />
            </div>
            <div className="carousel-item">
              <ImageRound {...img06} />
              <ImageRound {...img07} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
