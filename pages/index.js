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
      className={` text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl snap-y snap-mandatory overflow-x-hidden ${
        theme ? "bg-twhite text-black " : "bg-black text-twhite"
      }  `}
    >
      <Navbar />
      <Links />
      <GotoTop/>
      <div className="h-screen w-screen " id="herobanner">
        <HeroBanner />
        <button
          onClick={handleTheme}
          className="fixed z-20 top-5 md:left-72 lg:left-80 xl:left-96 left-3 bg-tred rounded-lg"
        >
          {theme ? <HiMoon size={30} /> : <CiSun size={30} />}
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
        <Footer/>
      </div>
    </div>
  );
}
