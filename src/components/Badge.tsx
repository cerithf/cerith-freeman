import { useState } from "react";
import { COLOURS } from "../utils/constants";

interface Props {
  children: string;
}

const languageColors = {
  Python: COLOURS.$blue,
  HTML: COLOURS.$orange,
  CSS: COLOURS.$purple,
  JavaScript: COLOURS.$yellow,
};

const Badge = ({ children }: Props) => {
  const badgeBackgroundColor =
    children in languageColors
      ? languageColors[children as keyof typeof languageColors]
      : COLOURS.$lightGrey;
  const textColor =
    badgeBackgroundColor == COLOURS.$lightGrey ? "color-black" : "color-white";
  // sets badge colour to grey if no language is found in languageColour
  return (
    <>
      <span
        style={{ backgroundColor: badgeBackgroundColor }}
        className={`badge ${textColor}`}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
