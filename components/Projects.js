import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";
import RevealY from "./RevealY";

const Projects = () => {
  return (
    <>
      <div >
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
        <div className=" lg:mx-20 h-[50%]  ">
          <RevealY>
          <div className="my-20 flex flex-wrap justify-center items-center">
      {ProjectList.map((project, index) => {
        return (
          <div
            key={index}
            className=" w-[20%] " // Adjust the column width based on screen size
          >
            <ProjectCard
              image={project.image}
              href={project.href}
              heading={project.heading}
              technologies={project.technologies}
            />
          </div>
        );
      })}
    </div>
          </RevealY>
        </div>
      </div>
    </>
  );
};

export default Projects;
