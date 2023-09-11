import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {BiLogoGmail} from 'react-icons/bi'

function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <div className="max-w-md  mx-auto p-6  rounded-md shadow-md border border-tred">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block ">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block ">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block ">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            autoComplete='false'
            rows="4"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <motion.button
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 18px red",
                textShadow: "0 0 8px white",
                backgroundColor : "red",
              }}
              className="px-4 py-2 bg-tred text-white rounded-md"
              type="submit"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
      <div className='mt-4 py-4 bg-tred w-full text-center flex items-center justify-center'>Email me : <span className='flex'><BiLogoGmail size={30}/>thuzaifa07@gmail.com</span></div>
      </>
  );
}

export default ContactForm;
