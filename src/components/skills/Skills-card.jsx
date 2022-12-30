import React from "react";
import classes from "./Skills-card.module.scss";

const SkillsCard = (props) => {
  return (
    <div className={classes.card}>
      <props.icon className={classes.icon} />
      <p className={classes.skill}>{props.skill}</p>
    </div>
  );
};

export default SkillsCard;
