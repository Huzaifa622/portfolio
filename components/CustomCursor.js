import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    // Create particles when the mouse moves
    const createParticle = () => {
      const particle = {
        x: mousePosition.x,
        y: mousePosition.y,
        id: new Date().getTime(),
      };
      setParticles((prevState) => [...prevState, particle]);

      // Remove the particle after a certain duration
      setTimeout(() => {
        setParticles((prevState) =>
          prevState.filter((p) => p.id !== particle.id)
        );
      }, 1500); // Adjust the duration as needed
    };

    window.addEventListener("mousemove", createParticle);

    return () => {
      window.removeEventListener("mousemove", createParticle);
    };
  }, [mousePosition]);

  const particleVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={`fixed top-0 left-0`} style={{ zIndex: 3 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={particleVariants}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "#43d9ad",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
      {/* Remove or comment out the background effect */}
      {/* <motion.div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50% 22% 40% 80%",
          filter: "blur(100px)",
          background: "linear-gradient(#43d9ad, #4d5bce)",
          opacity: 0.4,
          zIndex: 2,
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      /> */}
    </div>
  );
};

export default CustomCursor;
