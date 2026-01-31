import React, { useState } from "react";
import { clubMember } from "./clubMemberData";

export default function ClubMember() {
  const [expanded, setExpanded] = useState(false);

  // Show 6 by default
  const visibleMembers = expanded ? clubMember : clubMember.slice(0, 6);

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 bg-black py-24">
      {/* Heading + View All Button */}
      <div className="flex justify-between items-center w-full max-w-6xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#CC8821]">
          Club Members
        </h1>

        <button
          onClick={() => setExpanded(true)}
          className="bg-gradient-to-r from-gray-600 to-[#D28B1D]
                     hover:from-gray-900 hover:to-yellow-400
                     transition rounded-full py-2 px-6
                     text-sm sm:text-base text-white"
        >
          View All Members
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl flex flex-col justify-between p-6
                       min-h-[28rem] transition-all duration-300
                       hover:shadow-[0_0_40px_rgba(210,139,29,0.35)]"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl w-full h-72">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={member.img}
                alt={member.name}
              />
            </div>

            {/* Content + Logo */}
            <div className="flex justify-between items-center mt-6 px-2">
              <div className="flex-1 flex flex-col gap-2 text-left">
                <h1 className="text-black font-semibold text-lg sm:text-xl">
                  {member.name}
                </h1>
                <span className="text-[#D28B1D] text-sm sm:text-base">
                  {member.text}
                </span>
              </div>

              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex-shrink-0"
              >
                <img
                  src={member.companyLogo}
                  alt="LinkedIn"
                  className="w-12 h-12 object-contain opacity-80 hover:opacity-100 transition"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Expand / Collapse */}
      {clubMember.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-12 bg-gradient-to-r from-[#D28B1D] to-yellow-500
                     hover:from-yellow-400 hover:to-[#D28B1D]
                     transition-all duration-300 rounded-md
                     py-3 px-10 text-sm sm:text-base font-semibold text-white
                     shadow-lg hover:shadow-yellow-500/30"
        >
          {expanded ? "Show Less" : "Show More Members"}
        </button>
      )}
    </div>
  );
}
