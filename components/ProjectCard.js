import React from "react";
import { motion } from "framer-motion";
import RevealX from "./RevealX";
import RevealXY from "./RevealXY";

const ProjectCard = (props) => {
  return (
    <RevealXY>
      <motion.div
        className="rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out  max-w-[400px] "
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-4">{props.heading}</h2>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <div className="mt-4">
          <a
            href={props.href}
            className="text-blue-500 hover:underline mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </RevealXY>
  );
};

export default ProjectCard;
