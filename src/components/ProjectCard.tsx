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
    description: string;
  };
}

const ProjectCard = ({ data }: Props) => {
  const imagePath = `../src/assets/projects/${data.img}`;
  const projectClassName = data.img.split(".")[0];
  return (
    <div
      className={`ProjectCard ${projectClassName}`}
      style={{ backgroundImage: `url("${getImageUrl(data.img)}")` }}
    >
      <div className="ProjectInfo">
        <p className="dateDisplay">{data.date}</p>
        <div className="badges">
          {data.languages.map((language) => (
            <Badge>{language}</Badge>
          ))}
        </div>
        <h2>{data.name}</h2>
        <h4 className="subtitle">{data.subtitle}</h4>
        <ExpandToggle title="see more" style={1}>
          {data.description}
        </ExpandToggle>
      </div>
    </div>
  );
};

export default ProjectCard;
