import React from "react";
import { memberData } from "../../MembersPage/SingleMemberPage/memberData";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function InspiringMemberData() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="bg-black flex flex-col items-center justify-center pt-[3rem] md:pt-[4rem] overflow-hidden">
      <div className="text-center">
        <h2 className="text-[rgba(255,255,255,1)] font-bold text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem]">
          Inspiring Afghan Members
        </h2>
        <h3 className="text-[rgba(153,153,153,1)] font-bold text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem]">
          Featured Members
        </h3>
      </div>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[2rem] px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap"
      >
        {/* Only take first 3 members */}
        {memberData.slice(0, 3).map((member) => (
          <Motion.div
            key={member.id}
            variants={cardVariants}
            className="bg-[rgba(34,34,34,1)] rounded-[10px] flex flex-col items-center gap-4 p-[0.6rem] w-full sm:w-[300px]"
          >
            {/* Fixed height image container */}
            <div className="w-full h-[250px] overflow-hidden rounded-[10px]">
              <img
                src={member.image}
                alt={`${member.name} ${member.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <h4 className="text-[rgba(255,255,255,1)] font-bold">
                {member.name} {member.lastName}
              </h4>
              <p className="text-[rgba(153,153,153,1)] font-bold text-sm">
                {member.role}
              </p>
            </div>
            <div className="flex justify-between items-center w-full mt-auto">
              <Link
                to={`/members/${member.id}`}
                className="text-[rgba(204,136,33,1)] font-bold"
              >
                View Profile
              </Link>
              {member.lilink && (
                <a
                  href={member.lilink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={32}
                    className="text-[#D28B1D] hover:text-yellow-300"
                  />
                </a>
              )}
            </div>
          </Motion.div>
        ))}
      </Motion.div>

      <button className="mt-[2rem] md:mt-[3rem] lg:mt-[4rem] bg-gradient-to-r from-black to-[#D28B1D] hover:from-gray-900 hover:to-yellow-400 transition rounded-full py-2 px-6 text-sm sm:text-base text-white">
        View All Members
      </button>
    </section>
  );
}
