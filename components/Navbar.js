import React from 'react';
import { motion } from 'framer-motion';
import { scrollTo } from "@/pages/services";

const Navbar = () => {
  return (
    <div className="fixed z-20 w-full backdrop-blur-md backdrop-filter bg-rgba-black">
      <div className="w-full flex justify-center text-center m-2 overflow-x-hidden ">
        <nav className="flex w-[80%] h-[3rem] justify-between items-center text-center ">
          <div>
            <h2 className="text-4xl font-bold">
              Huzaifa<span className="text-tred ">.</span>
            </h2>
          </div>
          <div className="w-[50%]">
            <ul className="flex justify-evenly z-10 text-center">
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px white",
                  transition: { duration: 1.1, repeat: Infinity },
                }}
                onClick={() => scrollTo("herobanner")}
                className="cursor-pointer"
              >
                Home
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px white",
                  transition: { duration: 1.1, repeat: Infinity },
                }}
                onClick={() => scrollTo("about")}
                className="cursor-pointer"
              >
                About
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px white",
                  transition: { duration: 1.1, repeat: Infinity },
                }}
                onClick={() => scrollTo("projects")}
                className="cursor-pointer"
              >
                Projects
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px white",
                  transition: { duration: 1.1, repeat: Infinity },
                }}
                onClick={() => scrollTo("contact")}
                className="cursor-pointer"
              >
                Contact
              </motion.li>
              <motion.a
              href='/Resume.pdf'
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 18px red",
                  textShadow: "0 0 8px white",
                  backgroundColor: "red",
                }}
                className="bg-tred text-twhite p-2 pb-1 pt-1  rounded-lg "
                
              >
              My Resume
              </motion.a>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="w-[95%] mx-auto" />
    </div>
  );
};

export default Navbar;