import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import RevealY from "./RevealY";
import Carousel from "./Carousel";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ProjectList = [
  {
    image: '/blog.JPG ',
    href: 'https://myblogging-app-huzaifa.vercel.app/',
    heading: 'Blog Website',
    technologies: ['Tailwind CSS', 'Firebase', 'Next JS']
  },
  {
    image: '/budget.JPG ',
    href: 'https://budget-app-github-io.vercel.app/',
    heading: 'Budget App',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    image: '/news.JPG ',
    href: 'https://news-pi-eight.vercel.app/',
    heading: 'News',
    technologies: ['Material UI', 'Tailwind CSS', 'Next Js']
  },
  {
    image: '/quiz.JPG ',
    href: 'https://quiz-six-bay.vercel.app/',
    heading: 'Quiz App',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? ProjectList.length - 1 : prevIndex - 1
    );
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === ProjectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="flex items-end justify-center">
        <div className="flex w-[90%] items-end">
          <div className="w-full mr-4 h-1 bg-tred mb-2">
            <hr />
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mt-16">
            <span className="text-tred">.</span>Projects
          </h1>
        </div>
      </div>
      <div className="lg:mx-20 h-[50%]">
        <RevealY>
          <div className="">
        
              {ProjectList.map((project, index) => (
                <div key={index}>
                  {currentProjectIndex === index && (
                    <ProjectCard
                      image={project.image}
                      href={project.href}
                      heading={project.heading}
                      technologies={project.technologies}
                    />
                  )}
                </div>
              ))}
           
          </div>
        </RevealY>
        <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={goToPreviousProject}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BiChevronLeft size={40} />
        </button>
        <button
          onClick={goToNextProject}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <BiChevronRight size={40} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Projects;
