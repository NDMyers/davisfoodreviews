import { FC } from 'react'
import Image from "next/image";
import TopFiveEntry from '../components/TopFiveEntry';
import { Star, StarHalf } from 'lucide-react';

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (

    <div id="homepage" className="rounded-3xl w-full max-w-[120rem] min-h-screen flex flex-col">

        <div className='flex flex-col justify-between pt-10 pb-20'>
            <div className='flex justify-between items-center w-full'>
                <TopFiveEntry shopName='1. AKIRA' location='620 W Covell Blvd STE A, Davis, CA 95616'/>
                <div className='flex flex-row'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </div>

        <div className='flex flex-col justify-between pb-20'>
            <div className='flex justify-between items-center w-full'>
                <TopFiveEntry shopName='2. YANGKEE DUMPLING' location='2151 Cowell Blvd C, Davis, CA 95618' />
                <div className='flex flex-row'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </div>

        <div className='flex flex-col justify-between pb-20'>
            <div className='flex justify-between items-center w-full'>
                <TopFiveEntry shopName='3. GUADS' location='231 3rd St, Davis, CA 95616' />
                <div className='flex flex-row'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </div>

        <div className='flex flex-col justify-between pb-20'>
            <div className='flex justify-between items-center w-full'>
                <TopFiveEntry shopName='4. MIKUNIS' location='500 1st St 19, Davis, CA 95616'/>
                <div className='flex flex-row'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </div>

        <div className='flex flex-col justify-between pb-20'>
            <div className='flex justify-between items-center w-full'>
                <TopFiveEntry shopName='5. TIMS HAWAIIAN' location='516 2nd St, Davis, CA 95616' />
                <div className='flex flex-row'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </div>

    </div>
  
    )
}

export default About



// <div className="flex justify-center rounded-3xl flex-1 order-1 shadow-lg shadow-slate-700 bg-[#7dc994]">
// <Image
//     src='/akira.jpg'
//     alt="Akira Coffee & Tea House"
//     className="dark:invert"
//     width={300}
//     height={100}
//     priority
// />
// </div>


        // {/* Section 1 left bubble right text*/}
        // <div className="flex flex-col w-full min-h-80 px-4 my-4 lg:flex-row">
        //     {/* left bubble */}
        //     <div className="rounded-3xl flex-1 order-1 shadow-lg shadow-slate-700 bg-[#7dc994] lg:order-2">

        //     </div>
        //     {/* right text */}
        //     <div className="w-full pl-10 pt-4 flex flex-col flex-2 justify-evenly items-start list-disc order-2 lg:w-1/2 lg:order-1 lg:pt-0">

        //     </div>
        // </div>

        // {/* Section 1 left bubble right text*/}
        // <div className="flex flex-col w-full min-h-80 px-4 my-4 lg:flex-row">
        //     {/* left bubble */}
        //     <div className="rounded-3xl flex-1 order-1 shadow-lg shadow-slate-700 bg-[#7dc994]">

        //     </div>
        //     {/* right text */}
        //     <div className="w-full pl-10 pt-4 flex flex-col flex-2 justify-evenly items-start list-disc order-2 lg:w-1/2 lg:order-1 lg:pt-0">

        //     </div>
        // </div>


            //     {/* Section 1 left bubble right text*/}
            //     <div className="flex flex-col w-full min-h-80 px-4 my-4 lg:flex-row">
            //     {/* right text */}
            //     <div className="w-full pl-10 pt-4 flex flex-col flex-2 items-center list-disc order-2 lg:w-1/2 lg:pt-0">
            //         <a className='text-2xl'>AKIRA</a>
            //         <a className='text-center'>620 W Covell Blvd STE A, Davis, CA 95616</a>
            //         <br></br>
            //         <div className='flex justify-between min-w-full'>
            //             <div className='w-full flex justify-center'>
            //                 <ul>PROS</ul>
            //             </div>
            //             <div className='w-full flex justify-center'>CONS</div>
            //         </div>
            //     </div>
            // </div>