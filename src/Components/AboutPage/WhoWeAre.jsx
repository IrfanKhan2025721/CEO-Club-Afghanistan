// import React from 'react'
// import whoWeAre from '../../assets/AboutImg/whoWeAre.svg'

// export default function WhoWeAre() {
//   return (
//     <div className='bg-black px-4 sm:px-8 md:px-16 py-10'>
//       <div className='flex flex-col-reverse md:flex-row items-center md:items-start'>
        
//         {/* Text Section */}
//         <div className='mt-8 md:mt-0 md:w-1/2'>
//           <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
//             <span className='text-orange-400'>Who</span> We Are
//           </h1>

//           <p className='text-white mt-5 text-sm sm:text-base md:text-lg md:w-full'>
//             CEO Club Afghanistan is a professional organization devoted to empowering Afghan CEOs, executives, and rising leaders. Our network brings together key decision-makers from across sectors to champion a collaborative, ethical, and visionary business community.
//           </p>

//           <p className='text-white mt-4 text-sm sm:text-base md:text-lg md:w-full'>
//             We believe knowledge-sharing is essential to Afghanistan’s economic and social advancement. By connecting Afghan talent with global resources and opportunities, we encourage ethical leadership and inclusive growth.
//           </p>

//           <p className='text-white mt-4 text-sm sm:text-base md:text-lg md:w-full'>
//             Promoting women and youth leadership, innovation, and sustainable development are core to our vision. CEO Club Afghanistan provides a trusted platform for networking, partnerships, and excellence, helping shape a brighter, more inclusive future.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className='md:w-1/2 flex justify-center md:justify-end'>
//           <img src={whoWeAre} alt="Who We Are" className='w-full max-w-sm md:max-w-md lg:max-w-lg' />
//         </div>

//       </div>
//     </div>
//   )
// }




import React, { useState, useEffect } from "react";
import whoWeAre from "../../assets/AboutImg/whoWeAre.svg";

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle for screens 768px and below
  const isToggleScreen = windowWidth <= 768;

  const fullText = (
    <>
      CEO Club Afghanistan is a professional organization devoted to empowering Afghan CEOs, executives, and rising leaders. Our network brings together key decision-makers from across sectors to champion a collaborative, ethical, and visionary business community.
      <br />
      We believe knowledge-sharing is essential to Afghanistan’s economic and social advancement. By connecting Afghan talent with global resources and opportunities, we encourage ethical leadership and inclusive growth.
      <br />
      Promoting women and youth leadership, innovation, and sustainable development are core to our vision. CEO Club Afghanistan provides a trusted platform for networking, partnerships, and excellence, helping shape a brighter, more inclusive future.
    </>
  );

  const partialText = (
    <>
      CEO Club Afghanistan is a professional organization devoted to empowering Afghan CEOs, executives, and rising leaders. Our network brings together key decision-makers from across sectors to champion a collaborative, ethical, and visionary business community.
    </>
  );

  return (
    <section className="bg-black px-4 md:px-16 py-10 md:py-16">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-10">
        <span className="text-orange-400">Who</span> We Are
      </h1>

      {/* Flex layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-4">
          
          {/* Text + Button Row for toggle */}
          {isToggleScreen ? (
            <div className="flex flex-col">
              <p className="text-white text-base md:text-lg mb-2">{isExpanded ? fullText : partialText}</p>
              <div className="flex justify-start">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-orange-400 font-semibold hover:underline"
                >
                  {isExpanded ? "Read less ▲" : "Read more ▼"}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white text-base md:text-lg">{fullText}</p>
          )}

        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={whoWeAre}
            alt="Who We Are"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
