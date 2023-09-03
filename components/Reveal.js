import { motion, useAnimate, useInView } from "framer-motion";
import { useRef } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
