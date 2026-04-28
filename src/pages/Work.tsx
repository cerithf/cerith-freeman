import React, { useState } from "react";
import WorkCard from "../components/WorkCard";
import WorkData from "../data/work_experience.json";
import BriefcaseImg from "../assets/briefcase.svg";
import ImageBanner from "../components/ImageBanner";

const Work = () => {
  return (
    <div className="WorkPage">
      <h1 className="PageTitle">Work</h1>
      <ImageBanner imageName="briefcaseImg" path={BriefcaseImg} />
      <div className="cardsContainer">
        {WorkData.map((item) => (
          <WorkCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
