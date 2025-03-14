import React from "react";
import "./ProjectCard.css";
import URL from "../../assets/url.png";
import Github from "../../assets/github1.png";

const ProjectCard = ({ url, github, image, description }) => {
  return (
    <div className="project-card">
      <div className="project-icons">
        <a href={url} target="blank">
          <img src={URL} alt="Link to URL" />
        </a>
        <a href={github} target="blank">
          <img src={Github} alt="Link to Github" />
        </a>
      </div>
      <img className="project-image" src={image} alt="Screenshot of project" />
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
