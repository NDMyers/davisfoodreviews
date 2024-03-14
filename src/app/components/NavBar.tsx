'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavBarProps {
  setCurrentPage: (page: 'about' | 'work' | 'resume') => void;
}

const NavBar: FC<NavBarProps> = ({ setCurrentPage }) => {

  const pathname = usePathname()

  return (

    <div className="flex justify-end w-full max-w-5xl pt-1 lg:p-0">
        <div className="flex items-center justify-between w-full border-b-2 border-emerald-700 lg:max-w-2xl lg:mb-0 lg:grid-cols-3">
            <div
              onClick={() => setCurrentPage('about')}
              className="w-1/4 group px-4 py-5 rounded-lg border border-transparent flex justify-center transition-colors hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semi transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none`}>
                About{""}
              </h2>
            </div>

            <div
              onClick={() => setCurrentPage('work')}
              className="w-1/4 group px-4 py-5 rounded-lg border border-transparent flex justify-center transition-colors hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semi transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none`}>
                Work{" "}
              </h2>
            </div>

            <div
              onClick={() => setCurrentPage('resume')}
              className="w-1/4 group px-4 py-5 rounded-lg border border-transparent flex justify-center transition-colors hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semi transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none`}>
                Resume{" "}
              </h2>
            </div>
        </div>
    </div>

  )
}

export default NavBar