import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";
import RevealY from "./RevealY";

const Projects = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex items-end justify-center">
          <div className="flex w-[90%] items-end">
            <div className="w-full mr-4 h-1 bg-tred mb-2">
              <hr />
            </div>
            <h1 className="text-7xl font-extrabold mt-12">
              <span className="text-tred">.</span>Projects
            </h1>
          </div>
        </div>
        <div className="m-32 ">
          <RevealY>
            <div className="flex gap-4 ">
              {ProjectList.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    href={project.href}
                    heading={project.heading}
                    technologies={project.technologies}
                  />
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
