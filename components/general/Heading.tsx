import React from "react";
import { HeadingProps } from "./interfaces/HeadingProps.interface";

const Heading: React.FC<HeadingProps> = ({ text, center }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <span className="font-bold text-3xl">{text}</span>
    </div>
  );
};

export default Heading;
