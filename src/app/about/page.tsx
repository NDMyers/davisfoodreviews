'use client'

import { FC, useEffect, useState } from 'react'
import Image from "next/image";
import TopFiveEntry from '../components/TopFiveEntry';
import { ArrowBigDown, ArrowDown, Star } from 'lucide-react';
import { motion } from "framer-motion";

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {

    const [clickedOne, setClickedOne] = useState(false);
    const [clickedTwo, setClickedTwo] = useState(false);
    const [clickedThree, setClickedThree] = useState(false);
    const [clickedFour, setClickedFour] = useState(false);
    const [clickedFive, setClickedFive] = useState(false);

    useEffect( ()=> {


    }, [])    


    const clickedVariants = {
        open: {
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 10px)",
        },
        closed: {
            scale: 0,
            clipPath: "inset(10% 50% 90% 50% round 10px)",
        }
    }

    const itemVariants = {
        open: { 
                opacity: 1,
                scale: 1,
                transition: { type: "spring" }
            },
        closed: { opacity: 0, transition: { duration: 0.5 } }
    }

    return (

    <div id="homepage" className="rounded-3xl w-full max-w-[120rem] min-h-screen flex flex-col">

        <motion.div className='flex flex-col justify-between items-left pt-10 pb-20 pl-5 rounded-lg mt-5 hover:cursor-pointer'
            whileHover={{ backgroundColor: "#ECDACC"}}
            transition={{ duration: 0.6}}
            onClick={()=>setClickedOne(!clickedOne)}
        >
            <div className='flex flex-col justify-between w-full md:flex-row md:items-center '>
                <TopFiveEntry shopName='1. AKIRA' location='620 W Covell Blvd STE A, Davis, CA 95616'/>
                <div className='flex flex-row pr-5 pt-2 md:pt-0'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>One of the few in Davis maintaining the affordability and quality every boba shop should have.</a>

            <motion.div
                variants={clickedVariants}
                initial={false}
                animate={clickedOne? "open" : "closed"}
                className={clickedOne? 'flex flex-col items-center mt-12 text-center w-full max-w-[120rem]' : 'w-0 h-0' }
            >
                <motion.a variants={itemVariants}>OUR RECS</motion.a>
                <motion.div className='flex justify-evenly w-full' variants={itemVariants}>
                    <div>
                        <Image 
                            className='flex'
                            src="/hokkaitea.png" 
                            alt='Light brown colored cup of tea'
                            width={200}
                            height={100}
                        />
                        <a>hokkaido milk tea</a>
                    </div>
                    <div>
                        <Image 
                            className='flex'
                            src="/tarosmooth.png" 
                            alt='Purple colored smoothie'
                            width={200}
                            height={100}
                        />
                        <a>taro smoothie</a>
                    </div>                       
                </motion.div>
            </motion.div>
        </motion.div>

        <motion.div className='flex flex-col justify-between items-center pt-10 pb-20 pl-5 mt-2 rounded-lg hover:cursor-pointer' 
            whileHover={{ backgroundColor: "#ECDACC"}}
            transition={{ duration: 0.6 }}
            onClick={()=>setClickedTwo(!clickedTwo)}
        >
            <div className='flex flex-col justify-between w-full md:flex-row md:items-center'>
                <TopFiveEntry shopName='2. YANGKEE DUMPLING' location='2151 Cowell Blvd C, Davis, CA 95618' />
                <div className='flex flex-row pr-5 pt-2 md:pt-0'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
            {clickedTwo && 
                <motion.div
                    className='flex mt-4'
                    animate={{ scale:[0.8, 1] }}
                >
                    MORE_INFO
                </motion.div>
            }
        </motion.div>

        <motion.div className='flex flex-col justify-between pb-20 pt-10 mt-2 pl-5 rounded-lg'
            whileHover={{ backgroundColor: "#ECDACC"}}
            transition={{ duration: 0.6 }}
        >
            <div className='flex flex-col justify-between w-full md:flex-row md:items-center'>
                <TopFiveEntry shopName='3. GUADS' location='231 3rd St, Davis, CA 95616' />
                <div className='flex flex-row pr-5 pt-2 md:pt-0'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </motion.div>

        <motion.div className='flex flex-col justify-between pb-20 pl-5 pt-10 mt-2 rounded-lg'
            whileHover={{ backgroundColor: "#ECDACC"}}
            transition={{ duration: 0.6 }}
        >
            <div className='flex flex-col justify-between w-full md:flex-row md:items-center'>
                <TopFiveEntry shopName='4. MIKUNIS' location='500 1st St 19, Davis, CA 95616'/>
                <div className='flex flex-row pr-5 pt-2 md:pt-0'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </motion.div>

        <motion.div className='flex flex-col justify-between pb-20 pl-5 mt-2 pt-10 rounded-lg'
            whileHover={{ backgroundColor: "#ECDACC"}}
            transition={{ duration: 0.6 }}
        >
            <div className='flex flex-col justify-between w-full md:flex-row md:items-center '>
                <TopFiveEntry shopName='5. TIMS HAWAIIAN' location='516 2nd St, Davis, CA 95616' />
                <div className='flex flex-row pr-5 pt-2 md:pt-0'>
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                    <Star className='fill-yellow-500' />
                </div>
            </div>
            <a className='pt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
        </motion.div>

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