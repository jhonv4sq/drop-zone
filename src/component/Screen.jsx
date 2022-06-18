import React, {useState} from 'react'

const Screen = (props) => {
    const [slot, setSlot] = useState(props.slot)
  return (
    <>
        <div className='background relative flex justify-center items-center rounded w-full lg:w-[600px] h-40 lg:h-[400px] shadow-[0_5px_26px_8px_rgb(86,155,81)]'>
            <input type='file' className='absolute w-full lg:w-[600px] h-40 lg:h-[400px] cursor-pointer' multiple />
            <p className='uppercase text-white text-lg lg:text-3xl font-[500]'>{slot}</p>
        </div>
    </>
  )
}

export default Screen