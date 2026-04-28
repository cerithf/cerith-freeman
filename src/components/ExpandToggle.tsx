import { ReactNode, useState } from "react";
import Chevron from "../assets/chevron-right-solid-full.svg";

interface Props {
  title: string;
  children: ReactNode;
}

const ExpandToggle = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="ExpandToggle">
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
