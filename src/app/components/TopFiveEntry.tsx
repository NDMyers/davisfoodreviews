
import { FC } from 'react'

interface TopFiveEntryProps {
  shopName: string
  location: string
}

const TopFiveEntry: FC<TopFiveEntryProps> = ({shopName, location}) => {
  return (

        <div className='flex flex-col items-start'>
          <a className='text-lg text-center lg:text-4xl '>{shopName}</a>
          <a className='text-xs lg:text-base'>{location}</a>
        </div>

    )
}

export default TopFiveEntry