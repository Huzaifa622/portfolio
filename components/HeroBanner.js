import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { scrollTo } from "@/pages/services";

import RevealY from "./RevealY";
const HeroBanner = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-wrap relative">
        <div className=" z-10">
          <div className="m-32 w-[60%] md:w-[50%]">
            <RevealY>
              <h3 className="text-4xl md:text-7xl font-extrabold">
                Hey,I&apos;m Huzaifa<span className="text-tred">.</span>
              </h3>
              <h1 className="text-2xl mt-5">
                I&apos;m a{" "}
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-tred to-red-700 text-3xl font-bold">
                  Full Stack Developer
                </span>{" "}
              </h1>
            </RevealY>
            <RevealY>
              <p className="mt-5">
                I'm a passionate and creative web developer with a strong desire
                to turn ideas into captivating digital experiences.I've spent
                1.5+ years in web developing.My work is driven by a commitment
                to excellence, attention to detail, and a keen eye for design. I
                take pride in delivering solutions that are user-friendly and
                tailored to meet the specific needs of my clients.let's
                connect!!
              </p>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 18px red",
                  textShadow: "0 0 8px white",
                  backgroundColor: "red",
                }}
                className="bg-tred text-twhite p-5 pt-2 pb-2 rounded-lg m-8"
                onClick={() => scrollTo("contact")}
              >
                Let's Connect
              </motion.button>
            </RevealY>
          </div>
        </div>
        <div className="absolute hidden sm:block  left-[60%] top-32 rounded-full bg-transparent bg-gradient-to-t from-slate-950 to-tred">
          <img
            className="grayscale-[100%] rounded-full opacity-90"
            width={400}
            src="/pic.png"
          />
        </div>
      </div>
      <div className="w-full flex justify-between z-0 items-center -mt-36 mb-20">
        <motion.div
          initial={{ rotate: 90 }}
          animate={{
            scale: 1.1,
            textShadow: "0 0 8px white",

            transition: { duration: 1.1, repeat: Infinity },
          }}
          className="flex items-center text-sm w-28 justify-between "
        >
          Scroll Down
          <AiOutlineArrowRight />
        </motion.div>
        <motion.div
          initial={{ rotate: 90 }}
          animate={{
            scale: 1.1,
            textShadow: "0 0 8px white",

            transition: { duration: 1.1, repeat: Infinity },
          }}
          className="flex items-center text-sm w-28 justify-between "
        >
          Scroll Down
          <AiOutlineArrowRight />
        </motion.div>
      </div>
    </>
  );
};

export default HeroBanner;
