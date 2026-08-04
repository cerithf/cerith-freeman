import { useState } from "react";
import { COLOURS } from "../utils/constants";

interface Props {
  children: string;
  backgroundColor?: string;
}

const languageColors = {
  Python: COLOURS.$blue,
  HTML: COLOURS.$orange,
  CSS: COLOURS.$purple,
  JavaScript: COLOURS.$yellow,
  React: COLOURS.$red,
};

const Badge = ({ backgroundColor = COLOURS.$lightGrey, children }: Props) => {
  const badgeBackgroundColor =
    children in languageColors
      ? languageColors[children as keyof typeof languageColors]
      : backgroundColor;
  const textColor = [
    COLOURS.$lightGrey,
    COLOURS.$veryLightGrey,
    COLOURS.$yellow,
  ].includes(badgeBackgroundColor)
    ? "black"
    : "white";
  return (
    <>
      <span
        style={{ backgroundColor: badgeBackgroundColor, color: textColor }}
        className={`badge ${textColor}`}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
