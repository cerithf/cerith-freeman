import { ReactNode, useState } from "react";
import Chevron from "../assets/chevron-right-solid-full.svg";

interface Props {
  title: string;
  startsOpen: boolean;
  style: number;
  children: ReactNode;
}

const ExpandToggle = ({
  title,
  startsOpen = true,
  style = 0,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = startsOpen ? useState(true) : useState(false);
  return (
    <div className={`ExpandToggle ExpandToggle-${style}`}>
      <span className="expandToggleHeader">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={Chevron} className="ChevronImg white-filter open" />
          ) : (
            <img className="ChevronImg white-filter closed" src={Chevron} />
          )}
        </button>
        <h3>{title}</h3>
      </span>
      <div className={isOpen ? "content expanded" : "content hidden"}>
        {children}
      </div>
    </div>
  );
};

export default ExpandToggle;
