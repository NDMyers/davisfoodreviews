'use client'

import { FC, useEffect, useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion';

interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {

  const [firstSpin, setFirstSpin] = useState(true);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: 'AKIRA', style: { backgroundColor: '#FAEDCB', textColor: 'black' } },
    { option: 'YANGKEE', style: { backgroundColor: '#C9E4DE' } },
    { option: 'GUADS', style: { backgroundColor: '#C6DEF1' } },
    { option: 'MIKUNIS', style: { backgroundColor: '#DBCDF0', textColor: 'black' } },
    { option: 'TIMS', style: { backgroundColor: '#F2C6DE' } },
  ]

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setFirstSpin(false);
      setMustSpin(true);
    }
  }

  return (

    <div className="rounded-3xl w-full max-w-[120rem] min-h-screen flex flex-col items-center">
      











      {/* <div className='flex flex-col items-center justify-center pt-20'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          radiusLineColor='white'
          
          outerBorderColor='rgb(101,155,117)'
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      <motion.button 
        onClick={handleSpinClick} 
        className='absolute z-10 shadow rounded-[50%] bg-[rgb(131,188,148)] w-20 h-20 font-bold border-4 border-[rgb(101,155,117)] hover:border-[rgb(67,114,81)]'
        whileHover={{ scale: 1.1 }}
      >
          SPIN
      </motion.button>
      </div>

      {!mustSpin && !firstSpin &&
      <div className='p-20'>
        looks like it is time to go to {data.at(prizeNumber)?.option}
      </div>} */}


    </div>
  )

}

export default Page