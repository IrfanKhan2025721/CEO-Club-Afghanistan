import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export default function OurMission() {
  return (
    <section className=" mt-[5rem] flex flex-col md:flex-row items-center justify-center gap-[3rem] md:justify-evenly px-4 sm:px-8 md:px-16  bg-[url('https://static.vecteezy.com/system/resources/thumbnails/070/326/894/small/financial-growth-arrows-chart-used-for-business-investment-to-success-concepts-design-the-growing-up-arrows-levels-up-in-technology-on-dark-blue-background-vector.jpg')] bg-cover bg-center bg-no-repeat py-[4rem]">
     
      {/* vission */}
      <div className='flex flex-col justify-center items-center gap-2 px-[2rem]'>
        <FontAwesomeIcon icon={faEarthAmericas} beatFade  className='w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] text-[rgba(204,136,33,1)]'/>
        <h3 className='text-center font-bold text-[1.2rem] text-white md:text-[1.5rem]'>Our Vission</h3>
        
        <p className='text-center text-white font-bold text-[0.5rem] '>A Respected Afghan Leadership <span className='block'>Community</span></p>
      </div>

          <div
  className="
    w-full h-[1px] md:w-[1px] md:h-auto md:self-stretch
    bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_15%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.1)_100%)]
    md:bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_15%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.1)_100%)]
  "
></div>


 
      {/* mission */}
      <div className='flex flex-col justify-center items-center gap-2 px-[2rem]'>
        <FontAwesomeIcon icon={faBullseye} beatFade  className='w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] text-[rgba(204,136,33,1)]'/>
        <h3 className='text-center font-bold text-[1.2rem] text-white md:text-[1.5rem]'>Our Mission</h3>
      
        <p className='text-center text-white font-bold text-[0.5rem] '>Empowering Leaders for inclusive <span className='block'>Growth</span></p>
      </div>

         <div
  className="
    w-full h-[1px] md:w-[1px] md:h-auto md:self-stretch
    bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_15%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.1)_100%)]
    md:bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_15%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.1)_100%)]
  "
></div>
    

      {/* values */}
      <div className='flex flex-col justify-center items-center gap-2 px-[2rem]'>
        <FontAwesomeIcon icon={faPuzzlePiece} beatFade className='w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] text-[rgba(204,136,33,1)]'/>
        <h3 className='text-center font-bold text-[1.2rem] text-white md:text-[1.5rem]'>Our Values</h3>
       
        <p className='text-center text-white font-bold text-[0.5rem] '>Integrity, Innovation, Collaboration</p>
      </div>

    </section>
  )
}
