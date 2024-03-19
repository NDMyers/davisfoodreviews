'use client'

import Image from "next/image";
import { FC, useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import About from "./about/page";
import Work from "./work/page";
import ResumePage from "./help/page";
import { ArrowDown, Circle, MessageCircleDashed } from "lucide-react";
import Link from "next/link";


interface PageProps {

}

const Page: FC<PageProps> = ({ }) => {

  const [currentPage, setCurrentPage] = useState<'about' | 'work' | 'resume'>('about');

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden overflow-y-auto px-8 bg-[rgb(255,243,232)] lg:px-10">

        {/* Who are we section */}
        <div className='flex flex-col justify-center items-center text-7xl min-h-screen tracking-tighter text-center'>
            <a>
              there is a lot of food in davis,
              <br></br>
              lets find the 
              <span className='text-amber-700 hover:cursor-pointer hover:text-[rgb(131,188,148)]'>
                <Link className="" href="/home"> best</Link>
              </span>
            </a>
            <div className="flex mt-20 text-2xl">
              <Image
                  src="/frog.png"
                  alt="My Logo"
                  className="dark:invert pt-10"
                  width={200}
                  height={24}
                  priority
              />
              <Circle fill="rgb(131,188,148)" className="mt-16 text-transparent size-4 animate-bounce"/>
              <Circle fill="rgb(131,188,148)" className="mt-12 text-transparent size-5 animate-bounce"/>
              <button className="ml-2 rounded-2xl bg-[rgb(131,188,148)] h-14 w-48 shadow-xl border-4 border-[rgb(109,161,125)] animate-bounce tracking-wider mt-3 hover:cursor-pointer hover:border-amber-700">
                <Link className="px-5" href="/home">LETS GO</Link>
              </button>
            </div>
            {/* <ArrowDown className="w-8 h-8 mt-20 text-slate-700 animate-bounce lg:w-20 lg:h-20"/> */}
        </div>

    </main>


  )
}

export default Page