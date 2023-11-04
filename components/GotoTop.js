import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import RevealY from "./RevealY";
import { motion } from "framer-motion";
const GotoTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenWindow = () => {
    let heightScroll = 250;

    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (window.scrollY > heightScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenWindow);

    return () => {
      window.removeEventListener("scroll", listenWindow);
    };
  }, []);

  return (
    <>
      {visible && (
     
        <div
          className="fixed top-[90%] lg:top-[85%] p-2 lg:p-4 rounded-full z-50 cursor-pointer left-[85%] lg:left-[90%] bg-tred rounded full"
          onClick={scrollTop}
        >
          <AiOutlineArrowUp size={25} />
        </div>
      )}
    </>
  );
};

export default GotoTop;
