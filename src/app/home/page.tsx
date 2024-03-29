'use client'

import { FC, useState } from 'react'
import NavBar from '../components/NavBar';
import Image from 'next/image';
import About from '../about/page';
import Work from '../work/page';
import ResumePage from '../help/page';
import { motion } from "framer-motion";

interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {

const [currentPage, setCurrentPage] = useState<'about' | 'work' | 'resume'>('about');


  return (

    <main className="flex min-h-screen flex-col items-center overflow-x-hidden overflow-y-auto p-8 bg-[rgb(255,243,232)] lg:p-10">

      {/* Logo, name, and NavBar */}
      <div className="flex flex-col w-full max-w-[120rem] items-center justify-between lg:flex-row">
        {/* Logo and name section */}
        <motion.div className="flex flex-col items-center text-center rounded-lg px-8 border border-transparent hover:cursor-pointer lg:flex-row lg:pr-8 lg:pl-0"
              onClick={()=>setCurrentPage('about')}
              whileHover = {{ 
                y: -5
              }}
        >
          <Image
                src="/frog.png"
                alt="My Logo"
                className=""
                width={100}
                height={24}
                priority
          />
          <a className="text-xl lg:pl-4"><span className="text-green-600">DAVIS</span> FOOD REVIEWS</a>
        </motion.div>
        <NavBar setCurrentPage={setCurrentPage} />
      </div>

      <div className='flex flex-col justify-between max-w-[120rem] w-full'>
        {/* Currently Displayed Page */}
        {currentPage === 'about' && <About />}
        {currentPage === 'work' && <Work />}
        {currentPage === 'resume' && <ResumePage />}

        {/* footer */}
        <div className='flex flex-col mt-2 items-center justify-between w-full max-w-[120rem] text-sm text-emerald-700 lg:flex-row'>
          <a href='https://ohnotype.co/fonts/vulf' className='hover:text-emerald-500'> font via ohnotype.co  </a>
          <a> last updated 3.28.2024 </a>
        </div>
      </div>
        
    </main>

  )
}

export default Page