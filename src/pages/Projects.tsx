import React, { useState } from "react";
import Selfie from "../assets/selfie.jpeg";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/projects.json";
import CodeImg from "../assets/code-slash.svg";
import ImageBanner from "../components/ImageBanner";

const Projects = () => {
  return (
    <div className="ProjectsPage">
      <h1 className="PageTitle">Projects</h1>
      <ImageBanner imageName="codeImg" path={CodeImg} />
      <div className="page-description">
        <p>
          Take a look at some of the projects I've made below. Some are still in
          progress and some you can click on to see the code on GitHub.
        </p>
      </div>
      <div className="cardsContainer">
        {ProjectData.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
