import React from "react";

import classes from "./Contact-info.module.scss";

const ContactInfo = () => {
  return (
    <div className={classes.card}>
      <p className={classes.name}>Paul Harris</p>
      <a href="mailto:paul172v@aol.com" className={classes.email}>
        paul172v@aol.com
      </a>
      <p className={classes.title}>Self-Taught Fullstack MERN Developer</p>
      <p className={classes.location}>Lochgoilhead, Scotland</p>
    </div>
  );
};

export default ContactInfo;
