import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiReact,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiAdobexd,
  SiFigma,
  SiGithub,
  SiFramer,
} from "react-icons/si";

import classes from "./Skills.module.scss";

import SkillsCard from "./Skills-card";

const Skills = () => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.heading}>Known languages, libraries and apps</h2>
      <div className={classes["skills-container"]}>
        <SkillsCard skill="HTML" icon={SiHtml5} />
        <SkillsCard skill="CSS" icon={SiCss3} />
        <SkillsCard skill="JavaScript" icon={SiJavascript} />
        <SkillsCard skill="Sass" icon={SiSass} />
        <SkillsCard skill="React" icon={SiReact} />
        <SkillsCard skill="React Router" icon={SiReactrouter} />
        <SkillsCard skill="Framer Motion" icon={SiFramer} />
        <SkillsCard skill="Node.js" icon={SiNodedotjs} />
        <SkillsCard skill="Express" icon={SiExpress} />
        <SkillsCard skill="MongoDB" icon={SiMongodb} />
        <SkillsCard skill="Postman" icon={SiPostman} />
        <SkillsCard skill="Adobe XD" icon={SiAdobexd} />
        <SkillsCard skill="Figma" icon={SiFigma} />
        <SkillsCard skill="GitHub" icon={SiGithub} />
      </div>
    </div>
  );
};

export default Skills;
