import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-twhite h-[100rem]">
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
      <div className="m-32 w-[50%]">
        <p className="text-lg">
          <span className="font-bold text-2xl bg-tred p-2 rounded-lg text-twhite m-1">H</span>ey,I'm Huzaifa and I'm a passionate web developer with a
          flair for crafting digital experiences that blend creativity with
          functionality. With a solid foundation in front-end and back-end
          technologies, I thrive on turning ideas into beautifully designed,
          user-friendly websites and web applications{" "}
        </p>
      </div>
      </div>
    </>
  );
};

export default About;
