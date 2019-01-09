import React, { Component } from "react";
import "./App.css";
import Header from "./parts/Header";
import Content from "./parts/Content";
import Footer from "./parts/Footer";

class App extends Component {
  render() {
    const header = {
      title: "Rebeca Prestes",
      description: "Front-end Web Developer",
      linkButton: "#portfolio",
      nameButton: "View Portfolio"
    };

    return (
      <div className="App">
        <Header {...header} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
