import React from "react";
import classes from "./Backgrounds.module.scss";

const Backgrounds = () => {
  return (
    <React.Fragment>
      <video
        src="/vids/background-vid.mp4"
        className={classes["background-vid"]}
        type="video/mp4"
        autoPlay="autoplay"
        loop
        muted
      />
      <img
        src="/img/background-img.jpg"
        className={classes["background-img"]}
        alt="sci-fi tech background"
      />
    </React.Fragment>
  );
};

export default Backgrounds;
