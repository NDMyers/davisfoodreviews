'use client'

import { FC, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import React from 'react'

interface pageProps {
  
}

const Page: FC<pageProps> = ({}) => {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
  ]

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (

    <div className="rounded-3xl w-full max-w-[120rem] min-h-screen flex flex-col items-center justify-evenly pt-4 lg:pt-0">
      
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>

    </div>
  )

}

export default Page