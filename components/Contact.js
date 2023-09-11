import React from 'react'
import ContactForm from './ContactForm';


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
    <div className='w-full'><ContactForm/></div>
      </div>
    </>
  );
}

export default Contact