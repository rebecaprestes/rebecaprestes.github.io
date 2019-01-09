import React, { Component } from "react";
import Nav from "../components/Nav";
import "../components/Style.css";

export default class Header extends Component {
  render() {
    const navbar = {
      title: "Rebeca Prestes",
      link01: "Home",
      link02: "About",
      link03: "Skills",
      link04: "Portfolio"
    };

    return (
      <div>
        <Nav {...navbar} />
        <div className="space-50">
          <h1 id="mytitle">{this.props.title}</h1>
          <p>{this.props.description}</p>
          <a className="black-button" href={this.props.linkButton}>
            {this.props.nameButton}
          </a>
        </div>
      </div>
    );
  }
}
