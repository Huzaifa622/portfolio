import React from 'react'

const Contact = () => {
  return (
    <>
      <div className=" h-screen">
        <div className="flex items-end justify-center">
        <div className="flex w-[90%] items-end">
            <div className="w-full mr-4 h-1 bg-tred mb-2">
              <hr />
            </div>
            <h1 className="text-7xl font-extrabold mt-12">
            <span className="text-tred">.</span>Contact
            </h1>
          </div>
        </div>
      <div className="m-32 w-[50%]">
        <p className="text-lg">
          <span className="font-bold text-2xl bg-tred p-2 rounded-lg  m-1">H</span>ey,I'm Huzaifa and I'm a passionate web developer with a
          flair for crafting digital experiences that blend creativity with
          functionality. With a solid foundation in front-end and back-end
          technologies, I thrive on turning ideas into beautifully designed,
          user-friendly websites and web applications{" "}
        </p>
      </div>
      </div>
    </>
  );
}

export default Contact