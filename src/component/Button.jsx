import React from 'react'
import SvgGoogle from './SvgGoogle'

export const ButtonGoogle = () => {
  return (
    <>
        <button type='submit' className='relative text-white hover:text-slate-500 hover:border-slate-500 flex flex-row justify-center items-center w-full lg:w-[389px] h-[45px] border-2 rounded my-2'>
            <SvgGoogle className='absolute left-[15px] hover' />
            <p className='font-montserrat text-[16px] font-[500]'>
                Login con Google
            </p>
        </button>
    </>
  )
}

export const ButtonGreen = () => {
  return (
    <>
        <button type='submit' className='relative flex flex-row justify-center items-center w-full  h-[45px] border-2 rounded border-[#569B51] bg-[#569B51] hover:bg-[#437c3f] mt-8 lg:mt-0'>
            <p className='font-montserrat text-white text-[16px] font-[500]'>
                Subir Archivo
            </p>
        </button>
    </>
  )
}
