import React from 'react'
import hero from '../../assets/HomeImages/hero.jpg'

export default function Form() {
  return (
    <div className=''>
      {/* text */}
      <div className='bg-black px-2  pt-[4rem]  lg:pb-[4rem] lg:pt-[8rem] leading-[1.5rem] sm:leading-[2rem] md:leading-[2.2rem] lg:leading-[2.4rem] text-center text-white font-bold sm:px-[3rem] md:px-[4rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]'>
        <p>We’d love to hear from you — whether <span className='lg:block'>you’re a CEO, innovator, or partner</span> <span className='lg:block'>interested in joining our network.</span></p>
        <p className='text-[rgba(204,136,33,1)]'>Reach out to us for collaborations, <span className='lg:block'>events, or general inquiries.</span></p>
      </div>

      {/* Form */}
      <section className='pt-[4rem] pb-[7rem] px-6 bg-black flex flex-col lg:flex-row gap-[4rem] xlg:gap-[2rem]'>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            // handle submit later
          }}        
          className='flex flex-col gap-6 rounded-[1.5rem] p-8 w-full lg:w-1/2 shadow-[0_0_20px_rgba(204,136,33,0.6)]'>

          <div className='sm:flex sm:justify-between gap-2'>

            <div className='text-white flex flex-col gap-2 sm:w-1/2'>
              <label htmlFor="name" className='font-bold text-[0.9rem]'>Name</label>
              <input type="text" name="name" id="name" placeholder='Said Shah' required className='bg-[rgba(31,31,34,1)] text-[rgba(115,115,115,1)] rounded-[0.8rem] py-2 px-3 '/>
            </div>

            <div className='text-white flex flex-col gap-2 sm:w-1/2'>
              <label htmlFor="email" className='font-bold text-[0.9rem]'>Email</label>
              <input type="email" name="email" id="email" placeholder='saidsha@gmail.com' required className='bg-[rgba(31,31,34,1)] text-[rgba(115,115,115,1)] rounded-[0.8rem] p-2 px-3 '/>
            </div>
          </div>

          <div className='text-white flex flex-col gap-2'>
            <label htmlFor="message" className='font-bold text-[0.9rem]'>Message</label>
            <textarea type="text" rows={7} name="message" id="message" placeholder='Your message...' required className='bg-[rgba(31,31,34,1)] text-[rgba(115,115,115,1)] rounded-[0.8rem] p-2 px-3 '/>
          </div>

          <button className='bg-[#CC8821] hover:bg-[#a66e1b] text-black font-bold py-1 px-4 rounded-lg transition-all'>Submit</button>
        </form>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Contact"
            className="w-full max-w-[500px] rounded-[1.5rem] object-cover"
          />
        </div>
    </section>
    </div>  
  )
}
