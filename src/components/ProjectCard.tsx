import { useState } from "react";
import Badge from "./Badge";
import ExpandToggle from "./ExpandToggle";

const getImageUrl = (name: string) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href;
};

interface Props {
  data: {
    name: string;
    subtitle: string;
    date: string;
    img: string;
    url?: string;
    languages: string[];
    description: string[];
    skills: string[];
    underConstruction?: Boolean;
  };
}

const ProjectCard = ({ data }: Props) => {
  const projectClassName = data.img.split(".")[0];
  return (
    <div
      className={`ProjectCard ${projectClassName} ${data.underConstruction && "under-construction"}`}
    >
      <img src={getImageUrl(data.img)} />
      <div className="projectInfo">
        <p className="dateDisplay">{data.date}</p>
        <div className="badges">
          {data.languages.map((language) => (
            <Badge>{language}</Badge>
          ))}
        </div>
        <h2>{data.name}</h2>
        <h4 className="subtitle">{data.subtitle}</h4>
        <div className="description">
          {data.description.map((paragraph: string) => (
            <p>{paragraph}</p>
          ))}
        </div>
        {data.skills[0] != "" && (
          <div className="projectSkillsContainer">
            <strong>Skills:</strong>
            {"  "}
            {data.skills.map((skill: string) => (
              <Badge>{skill}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
