import { useState } from "react";

interface Props {
  children: string;
}

const languageColour = ["Python", "HTML", "CSS", "JavaScript"];

const Badge = ({ children }: Props) => {
  const badgeNum = languageColour.indexOf(children) + 1;
  const textColor = badgeNum == 0 ? "color-black" : "color-white";
  // sets badge colour to grey if no language is found in languageColour
  return (
    <>
      <span className={`badge bdg-${badgeNum} ${textColor}`}>{children}</span>
    </>
  );
};

export default Badge;
