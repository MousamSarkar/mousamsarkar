import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/** flex-wrap -> Fall into new line if screen is to small */
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-13">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
