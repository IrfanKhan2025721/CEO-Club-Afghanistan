import React from 'react'
import eventImage from '../../assets/EventImages/eventimage.png'

function ContactHero() {
  return (
    <>
    <div
      className="relative mt-[4rem] h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${eventImage})` }}
    >
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 text-center">
        <h2 className="text-white font-bold text-[2.7rem] sm:text-[3.2rem] md:text-[4rem] xlg:text-[5rem]">
          Contact Us
        </h2>
        <h4 className="text-white font-semi text-[1.2rem] sm:text-[1.6rem] md:text-[2rem]">
          Reach CEO Club Afghanistan
        </h4>
      </div>
    </div>

    </>
  )
}

export default ContactHero