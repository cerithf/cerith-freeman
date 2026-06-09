import { useState, useEffect } from "react";
import Badge from "./Badge";
import ExpandToggle from "./ExpandToggle";
import useIsViewportLessThan from "../hooks/useIsViewportLessThan";
import { BREAKPOINTS, COLOURS } from "../utils/constants";

interface Props {
  index: number;
  data: {
    school: string;
    year: number;
    level: string;
    subtitle?: string;
    qualificationsSummary?: string;
    qualifications: [{ name: string; grade: string; emoji?: string }];
    useBadges: boolean;
  };
}

const gradeDisplay = (grade: string) => {
  const output =
    grade == "Double Distinction*" && useIsViewportLessThan(BREAKPOINTS.medium)
      ? "DD*"
      : grade;
  return output;
};

const EducationCard = ({ index, data }: Props) => {
  const qualificationTypes = Object.keys(data.qualifications);
  const cardClassName = data.useBadges
    ? "EducationCard card expandable"
    : "EducationCard card";
  const badgeDisplay = () => (
    <ul className="qualifications">
      {data.qualifications.map(
        (entry: { name: string; grade: string; emoji?: string }) => (
          <Badge
            backgroundColor={COLOURS.$veryLightGrey}
          >{`${entry.name} ${entry.emoji ?? ""} | ${gradeDisplay(entry.grade)}`}</Badge>
        ),
      )}
    </ul>
  );

  return (
    <div className={cardClassName} id={`EducationCard-${index}`}>
      <div className="cardHeader">
        <p className="dateDisplay">
          {data.year} | {data.level}
        </p>
        <div className="school-name-and-subtitle">
          <h2>{data.school}</h2>
          {data.subtitle ? <p className="subtitle">{data.subtitle}</p> : ""}
        </div>
      </div>
      <div className="qualificationDisplay">
        {data.qualificationsSummary ? (
          <p className="qualificationsSummary">{data.qualificationsSummary}</p>
        ) : (
          ""
        )}
        {data.useBadges ? (
          badgeDisplay()
        ) : (
          <>
            <p className="qualificationName">{data.qualifications[0].name}</p>
            <p className="qualificationGrade">{data.qualifications[0].grade}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
