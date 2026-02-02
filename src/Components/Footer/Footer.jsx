import React from 'react'
import facebook from '../../assets/HomeImages/facebook.png'
import ceoLogo from '../../assets/HomeImages/ceoLogo.png'
import instagram from '../../assets/HomeImages/instagram.png'
import X from '../../assets/HomeImages/X.png'
import { aboutLinks, communityLinks, programsLinks } from './footerData'


export default function Footer() {
  return (
    <footer className='bg-black px-4 sm:px-8 md:px-16 pt-[3rem] md:pt-[4rem]'>
      <div className='relative flex flex-col items-center sm:flex-row sm:justify-between gap-[3rem] pb-[2rem] sm:pb-[3rem]'>
        {/* logoes */}
        <div className='flex flex-col items-center justify-center gap-2'>
          <img src={ceoLogo} alt="" className='w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem]'/>
          {/* socials */}
          <div className='flex gap-[0.5rem]'>
            <img src={facebook} alt="" className='w-[1rem] sm:w-[1.5rem]  md:w-[2rem] lg:w-[2.5rem]'/>
            <img src={instagram} alt="" className='w-[1rem] sm:w-[1.5rem] md:w-[2rem] lg:w-[2.5rem]'/>
            <img src={X} alt="" className='w-[1rem] sm:w-[1.5rem] md:w-[2rem] lg:w-[2.5rem]'/>
          </div>
        </div>
        {/* links */}
        <div className='flex justify-between items-center w-full sm:w-auto gap-[4rem]'>
          {/* about_links */}
          <div>
            <ul className='flex flex-col gap-2'>
              {aboutLinks.map((link, index) => {
                return(
                  <>
                    <h3 className='text-white font-bold text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] '>{link.title}</h3>
                    <li key={index} className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem]  mt-[0.3rem]'>
                    <a href="#">{link.link_1}</a>
                    </li>
                    <li key={index}>
                      <a href="#" className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem] '>{link.link_2}</a>
                    </li>
                    <li key={index}>
                      <a href="#" className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem] '>{link.link_3}</a>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
          {/* community_links */}
          <div>
            <ul className='flex flex-col gap-2'>
              {communityLinks.map((link, index) => {
                return(
                  <>
                    <h3 className='text-white font-bold text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] '>{link.title}</h3>
                    <li key={index} className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem]  mt-[0.3rem]'>
                    <a href="#">{link.link_1}</a>
                    </li>
                    <li key={index}>
                      <a href="#" className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem] '>{link.link_2}</a>
                    </li>
                    <li key={index}>
                      <a href="#" className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem] '>{link.link_3}</a>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
          {/* programs_links */}
          <div>
            <ul className='flex flex-col gap-2'>
              {programsLinks.map((link, index) => {
                return(
                  <>
                    <h3 className='text-white font-bold text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] '>{link.title}</h3>
                    <li key={index} className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem]  mt-[0.3rem]'>
                    <a href="#">{link.link_1}</a>
                    </li>
                    <li key={index}>
                      <a href="#" className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem] '>{link.link_2}</a>
                    </li>
                    <li key={index}>
                      <a href="#" className='text-[rgba(153,153,153,1)] text-[0.5rem] sm:text-[0.7rem] md:text-[0.8rem] '>{link.link_3}</a>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
          
        </div>
        <span
          className='absolute bottom-0 left-0 w-full h-[1px]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_8%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.8)_100%)]
          '
        >

        </span>
      </div>
      <p className='text-gray-600 text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem] text-center mt-[1rem] pb-4'>CEO Club Afghanistan is an independent, non-political organization.</p>
    </footer>
  )
}
