import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

import RevealY from "./RevealY";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div >
        <div className="flex items-end justify-center">
          <div className="flex w-[90%] items-end">
            <h1 className="text-5xl lg:text-7xl font-extrabold mt-16 div-title">
              Contact<span className="text-tred">.</span>
            </h1>
            <div className="w-full ml-4 h-1 bg-tred mb-2">
              <hr />
            </div>
          </div>
        </div>
        <div className="w-full text-center my-14 md:my-8">
          <ContactForm /> 
        </div>
        {/* <RevealY>
          <div className="w-full flex justify-center">
            <motion.div
              animate={{
                boxShadow: "0 0 18px red",
                textShadow: "0 0 8px white",
                backgroundColor: "red",
              }}
              className="px-2 rounded-lg flex items-center"
            >
              <BiLogoGmail size={25} />: thuzaifa07@gmail.com
            </motion.div>
          </div>
        </RevealY> */}
        
      </div>
    </>
  );
};

export default Contact;
