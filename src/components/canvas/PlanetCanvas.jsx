import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { EarthCanvas } from "../../components/canvas";

const PlanetCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default PlanetCanvas;
