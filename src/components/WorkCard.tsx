import { useState } from "react";
import Badge from "./Badge";
import ExpandToggle from "./ExpandToggle";

interface Props {
  data: {
    start: number;
    end: number;
    role: string;
    company: string;
    description: string[];
    skills: {
      [key: string]: string[];
    };
  };
}

const WorkCard = ({ data }: Props) => {
  const keys = Object.keys(data);
  const skillSection = data["skills"];
  const skillGroups = Object.keys(skillSection);
  const dateDisplay =
    data.start == data.end ? data.start : `${data.start}–${data.end}`;

  return (
    <div className="WorkCard card">
      <p className="dateDisplay">{dateDisplay}</p>
      <h2>
        {data.role} <span className="companyName">@&nbsp;{data.company}</span>
      </h2>
      <ul>
        {data.description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ExpandToggle title="Skills">
        {skillGroups.map((skillGroup) => (
          <p>
            <strong>{skillGroup}:</strong>
            {skillSection[skillGroup].map((skill: string) => (
              <Badge>{skill}</Badge>
            ))}
          </p>
        ))}
      </ExpandToggle>
    </div>
  );
};

export default WorkCard;
