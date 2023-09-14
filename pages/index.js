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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={`w-screen h-screen text-xs md:text-md lg:text-md xl:text-lg  snap-y snap-mandatory overflow-x-hidden ${
        theme ? "bg-twhite text-black " : "bg-black text-twhite"
      }  `}
    >
      <Navbar />
      <Links />
      <div className="h-screen w-screen snap-start" id="herobanner">
        <HeroBanner />
        <button
          onClick={handleTheme}
          className="fixed z-20 top-5 md:left-72 left-5 bg-tred rounded-lg"
        >
          {theme ? <HiMoon size={30} /> : <CiSun size={30} />}
        </button>
      </div>
      <div id="about" className="h-screen w-screen snap-start">
        <About />
      </div>
      <div id="projects" className="h-screen snap-start">
        <Projects />
      </div>
      <div id="contact" className="h-screen w-screen snap-start">
        <Contact />
      </div>
    </div>
  );
}
