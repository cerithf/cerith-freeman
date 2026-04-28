import React, { useState } from "react";
import educationData from "../data/education.json";
import EducationCard from "../components/EducationCard";
import GradImg from "../assets/mortarboard-fill.svg";
import ImageBanner from "../components/ImageBanner";

const Education = () => {
  return (
    <div className="EducationPage">
      <h1 className="PageTitle">Education</h1>
      <ImageBanner imageName="gradImg" path={GradImg} />
      <div className="circleContainer">
        <div className="circle">
          {educationData.map((entry) => (
            <EducationCard data={entry} index={educationData.indexOf(entry)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
