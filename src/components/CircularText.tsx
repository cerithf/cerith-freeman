import { useState } from "react";

interface Props {
  children: string;
  radius: number;
  textColour: string;
}

const CircularText = ({ children, radius, textColour }: Props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      id="CircularText"
    >
      <path
        id="circlePath"
        d={`
      M ${50 - radius}, ${50}
      a ${radius},${radius} 0 1,1 ${2 * radius},0
      ${radius},${radius} 0 1,1 ${-2 * radius},0
    `}
      />
      <text fill={textColour}>
        <textPath href="#circlePath" id="subheading">
          {children}
        </textPath>
      </text>
    </svg>
  );
};

export default CircularText;
