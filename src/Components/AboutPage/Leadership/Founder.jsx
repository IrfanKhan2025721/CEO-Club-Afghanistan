import React from "react";
import { founders } from "./founderData";

export default function Founder() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 bg-black py-24">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
        Leadership & Governance
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl flex flex-col justify-between p-6
                       min-h-[28rem] transition-all duration-300
                       hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(210,139,29,0.35)]"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl w-full h-72">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={founder.img}
                alt={founder.name}
              />
            </div>

            {/* Content + Logo at bottom */}
            <div className="flex justify-between items-center mt-6 px-2">
              {/* Content */}
              <div className="flex-1 flex flex-col gap-2 text-left">
                <h1 className="text-black font-semibold text-lg sm:text-xl tracking-wide">
                  {founder.name}
                </h1>
                <span className="text-[#D28B1D] text-sm sm:text-base leading-relaxed">
                  {founder.text}
                </span>
              </div>

              {/* Logo */}
              <div className="ml-4 flex-shrink-0">
                <img
                  src={founder.companyLogo}
                  alt="company logo"
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Button */}
        <div className="col-span-full flex justify-center mt-12">
          <button
            className="bg-gradient-to-r from-[#D28B1D] to-yellow-500 
                       hover:from-yellow-400 hover:to-[#D28B1D]
                       transition-all duration-300 rounded-md
                       py-3 px-10 text-sm sm:text-base font-semibold text-white
                       shadow-lg hover:shadow-yellow-500/30"
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
}
