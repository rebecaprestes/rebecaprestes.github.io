import React from "react";
import "./Style.css";

export default props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light black-color">
      <a className="navbar-brand text-white" href="http://google.com.br">
        {props.title}
      </a>
      <button
        className="navbar-toggler background-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link text-white" href="/">
            {props.link01} <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link text-white" href="#about-me">
            {props.link02}
          </a>
          <a className="nav-item nav-link text-white" href="#skills">
            {props.link03}
          </a>
          <a className="nav-item nav-link text-white" href="#portfolio">
            {props.link04}
          </a>
        </div>
      </div>
    </nav>
  );
};
