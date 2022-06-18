import React, {useState, useEffect} from 'react'

const Screen = (props) => {
    const [slot, setSlot] = useState(props.slot)
    const [image, setImage] = useState()

  return (
    <>
        <div className='background relative flex justify-center items-center rounded w-full lg:w-[600px] h-40 lg:h-[400px] shadow-[0_5px_26px_8px_rgb(86,155,81)]'>
            
            <input type='file' className='absolute z-10 w-full lg:w-[600px] h-40 lg:h-[400px] cursor-pointer cursor-pointer' onChange={(event) => setImage(event.target.value) } multiple />
            <p className='uppercase text-white text-lg lg:text-3xl font-[500]'>{slot}</p>
        </div>
    </>
  )
}

export default Screen