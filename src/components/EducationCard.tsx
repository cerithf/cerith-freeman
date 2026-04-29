import { useState, useEffect } from "react";
import Badge from "./Badge";
import ExpandToggle from "./ExpandToggle";

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

// checks whether viewport width is below given number
// medium VP: 880px; mobile: 400px;
const isViewportLessThan = (num: number) => {
  const query = window.matchMedia(`(max-width: ${num}px)`);
  const [isViewportLessThan, setisViewportLessThan] = useState(query.matches);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) =>
      setisViewportLessThan(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return isViewportLessThan;
};

const gradeDisplay = (grade: string) => {
  const output =
    grade == "Double Distinction*" && isViewportLessThan(880) ? "DD*" : grade;
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
          <Badge>{`${entry.name} ${entry.emoji ?? ""} | ${gradeDisplay(entry.grade)}`}</Badge>
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
