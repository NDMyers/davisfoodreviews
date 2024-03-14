'use client'

import Image from "next/image";
import { FC, useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import About from "./about/page";
import Work from "./work/page";
import ResumePage from "./resume/page";
import { render } from "react-dom";

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {

  const [currentPage, setCurrentPage] = useState<'about' | 'work' | 'resume'>('about');

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-auto p-8 bg-[rgb(240,232,213)] lg:p-10">
      {/* Color bar? */}
      {/* <div className="w-full min-h-12 absolute top-0 bg-[#2b2525] lg:min-h-20">
      </div> */}

      {/* Logo, name, and NavBar */}
      <div className="flex flex-col w-full max-w-7xl items-center justify-between lg:flex-row">
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
          <a className="text-lg lg:pl-4">Eden Winniford</a>
        </div>

        <NavBar setCurrentPage={setCurrentPage} />

      </div>

      {/* Currently Displayed Page */}
      {currentPage === 'about' && <About />}
      {currentPage === 'work' && <Work />}
      {currentPage === 'resume' && <ResumePage />}

    </main>


  )
}

export default page