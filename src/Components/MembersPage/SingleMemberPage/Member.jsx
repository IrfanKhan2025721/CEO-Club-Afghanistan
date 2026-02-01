import React from 'react'
import { memberData } from './memberData'

function Member() {
  return (
    <main className='my-[3rem] px-4 sm:px-8 md:px-16 bg-black py-[4rem]'>
      {memberData.map((item) => (
        <div
          key={item.id}
          className='flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-16 md:gap-18 '
        >
          {/* IMAGE */}
          <div className='w-full mx-auto sm:w-[50%] '>
            <img
              src={item.image}
              alt={item.name}
              className='w-full rounded-lg h-[20rem] lg:h-[25rem] xl:h-[26.5rem]  object-cover'
            />
          </div>

          {/* CONTENT */}
          <div className='flex flex-col gap-3 sm:w-[50%]'>
            {/* TEXT BLOCK */}
            <h2 className='text-white font-bold text-[1.6rem] sm:text-[2rem] lg:text-[3rem] xl:text-[3.5rem]'>
                {item.name}{' '}
                <span className='text-[rgba(204,136,33,1)]'>
                  {item.lastName}
                </span>
              </h2>
            <div className='flex flex-col gap-8 sm:gap-16 lg:gap-20'>
              <p className='text-[rgba(255,255,255,0.73)] font-bold text-[1.2rem]  sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.3rem]'>
                {item.role}
                <ul className='text-[rgba(255,255,255,0.73)] font-normal mt-[0.5rem] text-[0.8rem]  lg:text-[1rem] xl:text-[1.1rem] leading-[1.5rem]'>
                  {item.organizations.map((org, index) => (
                    <li key={index}>{org}</li>
                  ))}
                </ul>
              </p>

              <blockquote className='text-[rgba(255,255,255,0.73)] font-bold text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] max-w-[25rem] md:max-w-[32rem]'>
                <span className='text-[rgba(204,136,33,0.51)]'>"</span>
                {item.quote}
                <span className='text-[rgba(204,136,33,0.51)]'>"</span>
              </blockquote>
            </div>

            {/* QUOTE */}
            
          </div>
        </div>
      ))}
    </main>
  )
}

export default Member
