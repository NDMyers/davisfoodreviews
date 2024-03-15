import { FC } from 'react'
import Image from "next/image";
import TopFiveEntry from '../components/TopFiveEntry';

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (

    <div id="homepage" className="rounded-3xl w-full max-w-[120rem] min-h-screen flex flex-col items-center justify-evenly lg:pt-0">

        <TopFiveEntry shopName='1. akira' />
        <TopFiveEntry shopName='2. yangkee dumpling' />
        <TopFiveEntry shopName='3. bonchon' />
        <TopFiveEntry shopName='4. mikunis ' />
        <TopFiveEntry shopName='5. chipotle' />
                        




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