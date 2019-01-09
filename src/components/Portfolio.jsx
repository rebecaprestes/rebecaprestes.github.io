import React from "react";
import ImageRet from "../imageTypes/imageRetangular";
import img001 from "../images/portfolio/nutti.png";
import img002 from "../images/portfolio/useconclave2.png";
import img003 from "../images/portfolio/blog-useconclave.png";
import img004 from "../images/portfolio/jammies.png";
import img005 from "../images/portfolio/vondutch.png";
import img006 from "../images/portfolio/author-hp.png";

import "./Style.css";

export default props => {
  const img01 = {
    link: img001,
    alt: "img02",
    title: "nutti.com.br"
  };

  const img02 = {
    link: img002,
    title: "useconclave.com.br",
    alt: "img02"
  };

  const img03 = {
    link: img003,
    title: "blog.useconclave.com.br",
    alt: "img02"
  };

  const img04 = {
    link: img004,
    title: "jammies.com.br",
    alt: "img02"
  };

  const img05 = {
    link: img005,
    title: "vondutchoriginals.com.br",
    alt: "img02"
  };

  const img06 = {
    link: img006,
    title: "Projeto pessoal",
    alt: "img02"
  };

  return (
    <div id={props.id} className="space-50 black-color">
      <h2 className="text-white">{props.title}</h2>
      <div className="row center-center">
        <ImageRet {...img01} />
        <ImageRet {...img02} />
        <ImageRet {...img03} />
      </div>
      <div className="row center-center space-30-top">
        <ImageRet {...img04} />
        <ImageRet {...img05} />
        <ImageRet {...img06} />
      </div>
    </div>
  );
};
