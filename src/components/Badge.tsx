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
  const textColor = [COLOURS.$lightGrey, COLOURS.$yellow].includes(
    badgeBackgroundColor,
  )
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
