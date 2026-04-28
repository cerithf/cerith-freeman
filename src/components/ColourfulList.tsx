import { useState } from "react";

import React, { Children, cloneElement, isValidElement } from "react";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const colours = {
  $red: "#F95738",
  $yellow: "#F4D35E",
  $orange: "#E77856",
  $pink: "#DA4167",
  $purple: "#88559c",
};
let i = 0;

const ColourfulList = ({ children, className }: ListProps) => {
  const styledChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === "li") {
      const colour = Object.values(colours)[i % Object.values(colours).length];
      i++;
      const textColour = colour == colours["$yellow"] ? "#2A2A2A" : "white";
      return cloneElement(
        child as React.ReactElement<{ style?: React.CSSProperties }>,
        {
          style: {
            ...(child.props as { style?: React.CSSProperties }).style,
            backgroundColor: colour,
            color: textColour,
          },
        },
      );
    }
    return child;
  });

  return <ul className={className}>{styledChildren}</ul>;
};

export default ColourfulList;
