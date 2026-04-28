import React, { useState } from "react";
import educationData from "../data/education.json";
import EducationCard from "../components/EducationCard";
import GradImg from "../assets/mortarboard-fill.svg";
import ImageBanner from "../components/ImageBanner";

type EducationEntry = {
  school: string;
  year: number;
  level: string;
  subtitle?: string;
  qualificationsSummary?: string;
  qualifications: [{ name: string; grade: string; emoji?: string }];
  useBadges: boolean;
};

const Education = () => {
  return (
    <div className="EducationPage">
      <h1 className="PageTitle">Education</h1>
      <ImageBanner imageName="gradImg" path={GradImg} />
      <div className="circleContainer">
        <div className="circle">
          {(educationData as unknown as EducationEntry[]).map((entry) => (
            <EducationCard data={entry} index={educationData.indexOf(entry)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
