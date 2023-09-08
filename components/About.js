import React from "react";
import RevealY from "./RevealY";
import RevealX from "./RevealX";
import {CiCircleChevRight} from 'react-icons/ci'
import {RiJavascriptFill} from 'react-icons/ri'
import {BiLogoCss3 , BiLogoFirebase, BiLogoTailwindCss, BiLogoMongodb} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
// import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5 , AiOutlineArrowRight} from 'react-icons/ai'


const About = () => {
  return (
    <>
      <div className=" h-screen">
        <div className="flex items-end justify-center">
          <div className="flex w-[90%] items-end">
            <h1 className="text-7xl font-extrabold">
              About<span className="text-tred">.</span>
            </h1>
            <div className="w-full ml-4 h-1 bg-tred mb-2">
              <hr />
            </div>
          </div>
        </div>
        <RevealX>
      <div className="m-32  h-screen flex">
        <div className="gap-8 w-[70%] mr-4 flex flex-col">
        <p className="text-lg">
          <span className="font-bold text-2xl bg-tred p-2 rounded-lg  m-1">H</span>ey,I'm Huzaifa and I'm a passionate web developer with a
          flair for crafting digital experiences that blend creativity with
          functionality. With a solid foundation in front-end and back-end
          technologies, I thrive on turning ideas into beautifully designed,
          user-friendly websites and web applications.{" "}
        </p>
        <p>My fascination with web development was sparked by its unique blend of creativity and technology. I believe that the web is the canvas of the future, and I am eager to contribute to its evolution. Whether it's crafting pixel-perfect user interfaces or writing efficient, elegant code, I find joy in every aspect of the development process.I'm always on the lookout for exciting web development projects and collaborations. Whether you're an individual with a vision or a business seeking to enhance your online presence, I'm here to turn your ideas into reality. Let's work together to create stunning websites that leave a lasting impression.</p>
      </div>
        <div className=" ml-4 gap-8 flex flex-col w-[30%]">
      <div>
       <h1 className="flex text-2xl items-center text-center gap-3 font-extrabold"><CiCircleChevRight className="bg-tred rounded-md" size={30}/>My Skills</h1>
       <div className="flex gap-4 mt-4 flex-wrap">
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">HTML<AiFillHtml5 size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">CSS<BiLogoCss3 size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">Tailwind<BiLogoTailwindCss size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">JavaScript<RiJavascriptFill size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">Raect JS<FaReact size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">Next JS<TbBrandNextjs size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">Firebase<BiLogoFirebase size={20}/></span>
        <span className="flex items-center gap-1 text-center p-3 pt-0 pb-0 border-tred border rounded-lg">MongoDB<BiLogoMongodb size={20}/></span>
       </div>
      </div>
       <div className="text-tred flex items-center text-center ">My Links <span className="ml-4"><AiOutlineArrowRight /></span></div>
      </div>
     
      </div>
      </RevealX>
      <div>
        
      </div>
      </div>
    </>
  );
};

export default About;
