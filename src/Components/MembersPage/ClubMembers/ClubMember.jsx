import React, { useState } from "react";
import { memberData } from "../../MembersPage/SingleMemberPage/memberData";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function ClubMember() {
  const [expanded, setExpanded] = useState(false);
  const visibleMembers = expanded ? memberData : memberData.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleLinkedInClick = (e, linkedinUrl) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("LinkedIn URL:", linkedinUrl); // Debug log

    if (linkedinUrl && linkedinUrl !== "#") {
      window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    } else {
      console.error("No LinkedIn URL provided");
    }
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 bg-black py-24 overflow-hidden">
      <Motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-between items-center w-full max-w-6xl mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#CC8821]">
          Club Members
        </h1>
        <button
          onClick={() => setExpanded(true)}
          className="bg-gradient-to-r from-gray-600 to-[#D28B1D] hover:from-gray-900 hover:to-yellow-400 transition rounded-full py-2 px-6 text-sm sm:text-base text-white"
        >
          View All Members
        </button>
      </Motion.div>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        <AnimatePresence>
          {visibleMembers.map((member) => (
            <Motion.div key={member.id} variants={cardVariants} layout>
              <div className="group bg-white rounded-2xl flex flex-col justify-between p-6 min-h-[28rem] h-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(210,139,29,0.35)]">
                {/* Image */}
                <Link
                  to={`/members/${member.id}`}
                  className="overflow-hidden rounded-xl w-full h-72 block"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={member.image}
                    alt={`${member.name} ${member.lastName}`}
                  />
                </Link>

                <div className="flex justify-between items-center mt-6 px-2">
                  {/* Name and Role */}
                  <Link
                    to={`/members/${member.id}`}
                    className="flex-1 flex flex-col gap-2 text-left"
                  >
                    <h1 className="text-black font-semibold text-lg sm:text-xl hover:underline">
                      {member.name} {member.lastName}
                    </h1>
                    <span className="text-[#D28B1D] text-sm sm:text-base">
                      {member.role}
                    </span>
                  </Link>

                  {/* LinkedIn Icon */}
                  {(member.linkedin || member.lilink) && (
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={(e) =>
                          handleLinkedInClick(
                            e,
                            member.linkedin || member.lilink,
                          )
                        }
                        className="text-blue-600 hover:text-blue-800 focus:outline-none p-2"
                      >
                        <FaLinkedin className="w-8 h-8 object-contain opacity-80 hover:opacity-100 transition" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {memberData.length > 6 && (
        <Motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setExpanded(!expanded)}
          className="mt-12 bg-gradient-to-r from-[#D28B1D] to-yellow-500 hover:from-yellow-400 hover:to-[#D28B1D] transition-all duration-300 rounded-md py-3 px-10 text-sm sm:text-base font-semibold text-white shadow-lg"
        >
          {expanded ? "Show Less" : "Show More Members"}
        </Motion.button>
      )}
    </div>
  );
}
