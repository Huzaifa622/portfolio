import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { scrollTo } from "@/pages/services";
const HeroBanner = () => {
  return (

  <> 
      <div className="w-full bg-twhite   text-black flex justify-center overflow-x-hidden">
        <nav className="flex w-[80%] h-[3rem] justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">Huzaifa<span className="text-tred">.</span></h2>
          </div>
          <div className="w-[50%]">
            <ul className="flex justify-evenly">

              <li onClick={()=>scrollTo('herobanner')} className="cursor-pointer">Home</li>
              <li onClick={()=>scrollTo('about')} className="cursor-pointer">About</li>
              <li onClick={()=>scrollTo('projects')} className="cursor-pointer">Projects</li>
              <li onClick={()=>scrollTo('contact')} className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="bg-twhite text-black w-full h-screen">
        <hr className="w-[95%] mx-auto" />
        <div className="m-32 w-[50%]">
          <Reveal>
          <h3 className="text-7xl font-extrabold">Hey,I&apos;m Huzaifa<span className="text-tred">.</span></h3>
          <h1 className="text-4xl mt-5">I&apos;m a <span className="text-tred text-4xl font-bold">Full Stack Developer</span> </h1></Reveal>
          <Reveal>
          <p className="text-lg mt-5">I'm a passionate and creative web developer with a strong desire to turn ideas into captivating digital experiences.I've spent 1.5+ years in web developing.My work is driven by a commitment to excellence, attention to detail, and a keen eye for design. I take pride in delivering solutions that are user-friendly and tailored to meet the specific needs of my clients.let's connect!!
          </p>
          <button className="bg-tred text-twhite p-5 pt-2 pb-2 rounded-lg">Contact</button>
          </Reveal>
        </div>
      </div>
      </>

  );
};

export default HeroBanner;
