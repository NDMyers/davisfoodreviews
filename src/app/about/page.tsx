import { FC } from 'react'

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (

    <div className="rounded-3xl w-full max-w-7xl min-h-screen flex flex-col items-center justify-evenly pt-4 lg:pt-0">

        {/* Section 1 left bubble right text*/}
        <div className="flex flex-col w-full min-h-80 px-4 my-4 lg:flex-row">
            {/* left bubble */}
            <div className="rounded-3xl flex-1 order-1 shadow-lg shadow-slate-700 bg-[#7dc994]">

            </div>
            {/* right text */}
            <ul className="w-full pl-10 pt-4 flex flex-col flex-2 justify-evenly items-start list-disc order-2 lg:w-1/2 lg:pt-0">
                <li>I am so...</li>
                <li>super duper...</li>
                <li>ultra mega...</li>
                <li>cool!</li>
            </ul>
        </div>

        {/* Section 1 left bubble right text*/}
        <div className="flex flex-col w-full min-h-80 px-4 my-4 lg:flex-row">
            {/* left bubble */}
            <div className="rounded-3xl flex-1 order-1 shadow-lg shadow-slate-700 bg-[#7dc994] lg:order-2">

            </div>
            {/* right text */}
            <ul className="w-full pl-10 pt-4 flex flex-col flex-2 justify-evenly items-start list-disc order-2 lg:w-1/2 lg:order-1 lg:pt-0">
                <li>I am so...</li>
                <li>super duper...</li>
                <li>ultra mega...</li>
                <li>cool!</li>
            </ul>
        </div>

        {/* Section 1 left bubble right text*/}
        <div className="flex flex-col w-full min-h-80 px-4 my-4 lg:flex-row">
            {/* left bubble */}
            <div className="rounded-3xl flex-1 order-1 shadow-lg shadow-slate-700 bg-[#7dc994]">

            </div>
            {/* right text */}
            <ul className="w-full pl-10 pt-4 flex flex-col flex-2 justify-evenly items-start list-disc order-2 lg:w-1/2 lg:order-1 lg:pt-0">
                <li>I am so...</li>
                <li>super duper...</li>
                <li>ultra mega...</li>
                <li>cool!</li>
            </ul>
        </div>


        {/* Footer */}
        {/* <div className="w-screen min-h-12 bg-[#2b2525] lg:min-h-20">
            <a>EMAIL</a>
            <a>PHONE NUMBER</a>
            <a>RESUME</a>
        </div> */}
    </div>
  
    )
}

export default About