import { animate, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const RevealXY = ({ children }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   const startAnimation = useAnimation();
//   useEffect(() => {
//     if (inView) {
//       startAnimation.start("visible");
//     }
//   }, [inView]);
  return (
    <div className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: {  rotate : 45 , x: 75 },
          visible: { rotate : 0  , x: 0},
        }}
        initial="hidden"
      whileHover={
        'visible'
      }
        
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {" "}
        {children}
      </motion.div>
    </div>
  );
};

export default RevealXY;
