import { useState, useEffect } from "react";
import Badge from "./Badge";
import ExpandToggle from "./ExpandToggle";
import { DataSaverOff } from "@mui/icons-material";

interface Props {
  index: number;
  data: {
    school: string;
    year: number;
    level: string;
    subtitle: string;
    qualificationsSummary: string;
    qualifications: [{ name: string; grade: string; emoji: string }];
    useBadges: Boolean;
  };
}

const isSmallViewport = (num: number) => {
  const query = window.matchMedia(`(max-width: ${num}px)`);
  const [isSmallViewport, setIsSmallViewport] = useState(query.matches);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) =>
      setIsSmallViewport(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return isSmallViewport;
};

const gradeDisplay = (grade: string) => {
  if (grade == "Double Distinction*" && isSmallViewport(880)) {
    return "DD*";
  } else {
    return grade;
  }
};

const EducationCard = ({ index, data }: Props) => {
  const qualificationTypes = Object.keys(data.qualifications);
  const cardClassName = data.useBadges
    ? "EducationCard card expandable"
    : "EducationCard card";
  return (
    <div className={cardClassName} id={`EducationCard-${index}`}>
      <div className="cardHeader">
        <p className="dateDisplay">
          {data.year} | {data.level}
        </p>
        <h2>{data.school}</h2>
        {data.subtitle ? <p className="subtitle">{data.subtitle}</p> : ""}
      </div>
      <div className="qualificationDisplay">
        {data.qualificationsSummary ? (
          <p className="qualificationsSummary">{data.qualificationsSummary}</p>
        ) : (
          ""
        )}
        {data.useBadges ? (
          <ul className="qualifications">
            {data.qualifications.map(
              (entry: { name: string; grade: string; emoji: string }) => (
                <Badge>{`${entry.name} ${entry.emoji} | ${gradeDisplay(entry.grade)}`}</Badge>
              ),
            )}
          </ul>
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
