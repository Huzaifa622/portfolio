import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import RevealX from "./RevealX";

function ContactForm() {
 

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_knr9gpe",
        "template_ykal3u4",
        formRef.current,
        "jpd2qzH4p2xn7sH1o"
      )
      .then(
        (result) => {
          alert("success", result);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
    <RevealX>
      <motion.div className="max-w-2xl  mx-auto pt-3 px-16 rounded-md ">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form onSubmit={sendEmail} ref={formRef}>
          <div className="mb-4">
           
            <input
              type="text"
        placeholder="Username"
              name="from_name"
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          <div className="mb-4">
     
            <input
              type="email"
          placeholder="Email"
              name="email_id"

              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
          <div className="mb-4">
           
            <textarea
       
              name="message"
placeholder="Message"
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              autoComplete="false"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 18px red",
                textShadow: "0 0 8px white",
                backgroundColor: "red",
              }}
              className="px-4 py-2 bg-tred text-white rounded-md text-black"
              type="submit"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
      </RevealX>
    </>
  );
}

export default ContactForm;
