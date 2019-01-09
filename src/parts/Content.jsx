import React from "react";
import TextBlock from "../components/TextBlock";
import SkillsBlock from "../components/SkillsBlock";
import Portfolio from "../components/Portfolio";

export default props => {
  const textblock = {
    id: "about-me",
    title: "ABOUT ME",
    text: "I am front-end developer"
  };

  const skillsblock = {
    id: "skills",
    title: "SKILLS"
  };

  const portfolio = {
    id: "portfolio",
    title: "PORTFOLIO"
  };

  return (
    <div>
      <TextBlock {...textblock} />
      <SkillsBlock {...skillsblock} />
      <Portfolio {...portfolio} />
    </div>
  );
};
