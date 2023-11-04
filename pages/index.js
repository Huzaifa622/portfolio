import Image from "next/image";
import { Inter } from "next/font/google";
import { CiSun } from "react-icons/ci";
import { HiMoon } from "react-icons/hi";
import Projects from "@/components/Projects";
import About from "@/components/About";
import HeroBanner from "@/components/HeroBanner";
import { useState } from "react";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Links from "@/components/Links";
import GotoTop from "@/components/GotoTop";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={` text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl snap-y snap-mandatory overflow-x-hidden ${
        theme ?  "bg-black text-twhite" :  "bg-twhite text-black  "
      }  `}
    >
      <Navbar />
      <Links />
      <GotoTop/>
      <div className="h-screen w-screen " id="herobanner">
        <HeroBanner />
        <button
          onClick={handleTheme}
          className=" fixed z-20 top-5 sm:top-5 md:right-9 lg:right-14 sm:right-6 right-0 mx-1  bg-tred rounded-lg text-twhite "
        >
          {theme ? <CiSun size={30} />:<HiMoon size={30} /> }
        </button>
      </div>
      <div id="about" className="h-screen w-screen ">
        <About />
      </div>
      <div id="projects" className="h-screen w-screen ">
        <Projects />
      </div>
      <div id="contact" className="h-screen w-screen ">
        <Contact />
      </div>
        <Footer/>
    </div>
  );
}
