import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const RevealX = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const startAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      startAnimation.start("visible");
    }
  }, [inView,startAnimation]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={startAnimation}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};

export default RevealX;
