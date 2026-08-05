import React, { useState } from "react";
import WorkCard from "../components/WorkCard";
import WorkData from "../data/work_experience.json";
import BriefcaseImg from "../assets/briefcase.svg";
import ImageBanner from "../components/ImageBanner";
import "../styles/pages/work.scss";

type WorkEntry = {
  start: number;
  end: number;
  role: string;
  company: string;
  description: string[];
  skills: { [key: string]: string[] };
};

const Work = () => {
  return (
    <div className="page-content WorkPage">
      <h1 className="PageTitle">Work</h1>
      <ImageBanner imageName="briefcaseImg" path={BriefcaseImg} />
      <div className="cardsContainer">
        {(WorkData as unknown as WorkEntry[]).map((item) => (
          <WorkCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
