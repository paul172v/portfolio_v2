import React from "react";
import classes from "./About-me.module.scss";

const AboutMe = () => {
  return (
    <div className={classes.card}>
      <p className={classes.text}>
        Hi, my name is Paul and I've been working in the hospitality industry
        for the past nine years. I'm now trying to make a career switch and
        break into the web design industry. I've been self-teaching mainly
        through Udemy courses, YouTube channels and online articles (Not to
        mention lots of practice). I know a variety of skills that I've listed
        below but basically I'm a MERN stack developer and while I haven't
        mastered React or Node yet, I do know both well enough to build things
        and am currently working to improve my skills and learn advanced
        concepts and practice with projects that put front and backend together.
        <br /> <br />
        As said I am currently looking for work in a company where I will be
        on-site and will be able to learn from coworkers. I am willing to
        relocate anywhere in the UK.
      </p>
    </div>
  );
};

export default AboutMe;
