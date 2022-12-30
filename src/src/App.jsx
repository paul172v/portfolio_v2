import React from "react";
import classes from "./App.module.scss";

import Backgrounds from "./components/backgrounds/Backgrounds";
import ContactInfo from "./components/contact-info/Contact-info";
import AboutMe from "./components/about-me/About-me";
import Skills from "./components/skills/Skills";
import ProjectCard from "./components/project-card/Project-card";

function App() {
  return (
    <div className={classes["page"]}>
      {/* Backgrounds */}
      <Backgrounds />

      {/* Contact Info */}
      <ContactInfo />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <ProjectCard
        image="/img/london-wayfarer.jpg"
        title="The London Wayfarer"
        description="This project is a single page brochure website for a fictional hostel made using React and animated using Framer-Motion"
        skills="React, Framer Motion"
        active="https://london-wayfarer.netlify.app/"
        frontend="https://github.com/paul172v/The-London-Wayfarer-v2"
      ></ProjectCard>

      <ProjectCard
        image="/img/katrina-holt-photography.jpg"
        title="Katrina Holt Photography"
        description="This project is a multi-page brochure website for a fictional freelance photographer made using React and React Router, and animated using Framer-Motion"
        skills="React, React Router, Framer Motion"
        active="https://katrina-holt-photography.netlify.app/"
        frontend="https://github.com/paul172v/katrina-holt-photography"
      ></ProjectCard>

      <ProjectCard
        image="/img/172v-book-ratings.jpg"
        title="172v Book Ratings"
        description="This project was a first attempt at combining a Node backend with a React frontend. Only does simple CRUD operations"
        skills="React, Node.js, Express, Mongoose"
        active="https://172v-book-ratings.netlify.app/"
        frontend="https://github.com/paul172v/172v-book-ratings-frontend"
        backend="https://github.com/paul172v/172v-book-ratings-backend/tree/main"
      ></ProjectCard>
    </div>
  );
}

export default App;
