import React from "react";
import { founders } from "./founderData";
import { motion as Motion } from "framer-motion";

export default function Founder() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 bg-black py-24 overflow-hidden">
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
      >
        Leadership & Governance
      </Motion.h1>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {founders.map((founder, index) => (
          <Motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white rounded-2xl flex flex-col justify-between p-6
                       min-h-[28rem] transition-all duration-300
                        hover:shadow-[0_0_40px_rgba(210,139,29,0.35)]"
          >
            <div className="overflow-hidden rounded-xl w-full h-72">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={founder.img}
                alt={founder.name}
              />
            </div>

            <div className="flex justify-between items-center mt-6 px-2">
              <div className="flex-1 flex flex-col gap-2 text-left">
                <h1 className="text-black font-semibold text-lg sm:text-xl tracking-wide">
                  {founder.name}
                </h1>
                <span className="text-[#D28B1D] text-sm sm:text-base leading-relaxed">
                  {founder.text}
                </span>
              </div>
              <div className="ml-4 flex-shrink-0">
                <img
                  src={founder.companyLogo}
                  alt="company logo"
                  className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition"
                />
              </div>
            </div>
          </Motion.div>
        ))}

        <Motion.div
          variants={itemVariants}
          className="col-span-full flex justify-center mt-12"
        >
          <button className="bg-gradient-to-r from-[#D28B1D] to-yellow-500 hover:from-yellow-400 hover:to-[#D28B1D] transition-all duration-300 rounded-md py-3 px-10 text-sm sm:text-base font-semibold text-white shadow-lg">
            Meet Our Team
          </button>
        </Motion.div>
      </Motion.div>
    </div>
  );
}
