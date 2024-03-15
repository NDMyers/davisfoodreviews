import { FC } from 'react'

interface TopFiveEntryProps {
  shopName: string
}

const TopFiveEntry: FC<TopFiveEntryProps> = ({shopName}) => {
  return (

        <div className='flex justify-center items-center'>
            <a className='text-4xl text-center'>{shopName}</a>
        </div>

    )
}

export default TopFiveEntry