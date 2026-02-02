import React from 'react'

export default function JoinTeam() {
  return (
    <div className='bg-black px-4 sm:px-8 md:px-16 py-10'>
      
      <h1 className='
        text-xl 
        sm:text-2xl 
        md:text-3xl 
        font-bold 
        text-white 
        text-center
      '>
        Be Part of Afghanistan’s Leadership Movement
      </h1>

      <p className='
        text-white 
        text-center 
        mt-4 
        mb-6 
        text-sm 
        sm:text-base
      '>
        Join a trusted network <br className='hidden sm:block' />
        shaping the country’s future.
      </p>

      <div className='flex justify-center'>
        <button className='
          bg-gradient-to-r 
          from-black 
          to-[#D28B1D] 
          hover:from-gray-900 
          hover:to-yellow-400 
          transition 
          rounded-full 
          py-2 
          px-6 
          text-sm 
          sm:text-base 
          text-white
        '>
          Apply for Member ship
        </button>
      </div>

    </div>
  )
}
