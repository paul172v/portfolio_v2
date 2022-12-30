import React from "react";
import classes from "./Project-card.module.scss";

const ProjectCard = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.image} alt={props.title} />
      <h2 className={classes.heading}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.skills}>{props.skills}</p>
      {props.active && (
        <a className={classes.link} href={props.active} target="_blanks">
          Active Site
        </a>
      )}
      {props.figma && (
        <a className={classes.link} href={props.figma} target="_blanks">
          Figma Design
        </a>
      )}
      {props.frontend && (
        <a className={classes.link} href={props.frontend} target="_blanks">
          Frontend Code
        </a>
      )}
      {props.backend && (
        <a className={classes.link} href={props.backend} target="_blanks">
          Backend Code
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
