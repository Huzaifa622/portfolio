import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CiSun } from 'react-icons/ci'
import {HiMoon } from 'react-icons/hi'
import Projects from '@/components/Projects'
import About from '@/components/About'
import HeroBanner from '@/components/HeroBanner'
import { useState } from 'react'
import Contact from '@/components/Contact'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Links from '@/components/Links'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [theme , setTheme] = useState(false);
  const handleTheme = () =>{
     setTheme(!theme);
  }
  return (
<div className={`${theme?'bg-twhite text-black ': 'bg-black text-twhite'}  h-full overflow-hidden`}>
 {/* <CustomCursor/> */}
 {/* <TsParticles/> */}
 <Navbar/>
 <Links/>
 <div className='h-full w-full' id='herobanner'>
<HeroBanner/>
<button onClick={handleTheme} className='fixed z-20 top-5 left-72 bg-tred rounded-lg'>{theme?<HiMoon size={30}/>:<CiSun size={30}/>}</button>
 </div>
 <div id='about'>
  <About/>
 </div>
 <div id='projects'>
  <Projects/>
 </div>
 <div id='contact'>
  <Contact/>
 </div>
 </div>
  )
}
