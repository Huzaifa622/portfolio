import React from "react";
import { motion } from "framer-motion";
import RevealX from "./RevealX";
import RevealXY from "./RevealXY";
import Image from "next/image";

const ProjectCard = (props) => {
  return (
    <motion.div
      className="rounded-lg p-4  hover:shadow-xl transition duration-300 ease-in-out"
      whileHover={{ scale: 1.1 }}
    >
      <Image
      width={400}
      height={400}
        src={props.image}
        alt={props.title}
        loading="eager"
        className=" object-cover rounded-md w-auto h-auto "
      />
      <h2 className="text-xl lg:text-2xl font-semibold mt-4">{props.heading}</h2>
      <p className="text-gray-600 mt-2 lg:text-base">{props.description}</p>
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
  );
};

export default ProjectCard;
