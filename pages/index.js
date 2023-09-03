import Image from 'next/image'
import { Inter } from 'next/font/google'


import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from './Contact'
import HeroBanner from '@/components/HeroBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className='bg-twhite h-full'>
 
 <div className='h-full w-full' id='herobanner'>
<HeroBanner/>
 </div>
 <div id='about'>
  <About/>
 </div>
 <div id='skills'>
  <Skills/>
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
