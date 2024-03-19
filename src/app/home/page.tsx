'use client'

import { FC, useState } from 'react'
import NavBar from '../components/NavBar';
import Image from 'next/image';
import About from '../about/page';
import Work from '../work/page';
import ResumePage from '../resume/page';

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {

const [currentPage, setCurrentPage] = useState<'about' | 'work' | 'resume'>('about');


  return (

    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-auto px-8 p-8 bg-[rgb(255,243,232)] lg:px-10 lg:p-10">

      {/* Color bar? */}
      {/* <div className="w-full min-h-12 absolute top-0 bg-[#2b2525] lg:min-h-20">
      </div> */}

      {/* Logo, name, and NavBar */}
      <div className="flex flex-col w-full max-w-[120rem] items-center justify-between lg:flex-row">
        {/* Logo and name section */}
        <div  className="flex flex-col items-center rounded-lg px-8 py-2 border border-transparent transition-colors hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:flex-row lg:pr-8 lg:pl-0 lg:py-0"
              onClick={()=>setCurrentPage('about')}
        >
          <Image
                src="/frog.png"
                alt="My Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
          />
          <a className="text-xl lg:pl-4"><span className="text-green-600">DAVIS</span> FOOD REVIEWS</a>
        </div>
        <NavBar setCurrentPage={setCurrentPage} />
      </div>

      {/* Currently Displayed Page */}
      {currentPage === 'about' && <About />}
      {currentPage === 'work' && <Work />}
      {currentPage === 'resume' && <ResumePage />}

      {/* footer */}
      <div className='flex flex-col items-center justify-between min-w-screen w-full text-sm text-emerald-700 lg:flex-row'>
        <a href='https://ohnotype.co/fonts/vulf' className='hover:text-emerald-500'> font via ohnotype.co  </a>
        <a> last updated 3.19.2024 </a>
      </div>
        
    </main>

  )
}

export default page