import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <>
    <div className='bg-tred w-full mt-[8.2rem]  md:mt-2 flex  flex-col justify-center items-center gap-2 '>
    <h2 className="text-4xl font-bold">
              Huzaifa<span  >.</span>
            </h2>
            <div className='text-base mr-3'>
                <p className='flex justify-center'><BiLogoGmail size={25} />: thuzaifa07@gmail.com</p>
                
                <p >Copyright &copy; 2023 | Huzaifa, Inc</p>
            
            </div>
            
        
        </div>
        </>
  )
}

export default Footer