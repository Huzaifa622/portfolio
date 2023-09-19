import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const GotoTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenWindow = () => {
    let heightScroll = 250;

    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenWindow);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", listenWindow);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          className="fixed top-[90%] cursor-pointer left-[85%] lg:left-[95%] bg-tred rounded full"
          onClick={scrollTop}
        >
          <AiOutlineArrowUp size={25} />
        </div>
      )}
    </>
  );
};

export default GotoTop;
