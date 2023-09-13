import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className=" h-screen ">
        <div className="flex items-end justify-center">
          <div className="flex w-[90%] items-end">
            <div className="w-full mr-4 h-1 bg-tred mb-2">
              <hr />
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mt-12">
              <span className="text-tred">.</span>Contact
            </h1>
          </div>
        </div>
        <div className="w-full text-center">
          <ContactForm /> <span className="text-2xl ">OR</span>
        </div>
        <div className="w-full flex justify-center">
          <motion.div
            whileHover={{
              boxShadow: "0 0 18px red",
              textShadow: "0 0 8px white",
              backgroundColor: "red",
            }}
            className="px-2 rounded-lg flex items-center"
          >
            <BiLogoGmail size={25} />: thuzaifa07@gmail.com
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
