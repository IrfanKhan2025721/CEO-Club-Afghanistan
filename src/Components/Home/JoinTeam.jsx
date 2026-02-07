import React from "react";
import { motion as Motion } from "framer-motion";

export default function JoinTeam() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Motion.div
      className="bg-black px-4 sm:px-8 md:px-16 py-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Motion.h1
        variants={itemVariants}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center"
      >
        Be Part of Afghanistan’s Leadership Movement
      </Motion.h1>

      <Motion.p
        variants={itemVariants}
        className="text-white text-center mt-4 mb-6 text-lg sm:text-2xl"
      >
        Join a trusted network <br className="hidden sm:block" />
        shaping the country’s future.
      </Motion.p>

      <Motion.div variants={itemVariants} className="flex justify-center mt-10">
        <button
          className="
          bg-gradient-to-r 
          from-black 
          to-[#D28B1D] 
          hover:from-gray-900 
          hover:to-yellow-400 
          transition 
          rounded-full 
          py-2 
          px-6 
          text-sm 
          sm:text-base 
          text-white
        "
        >
          Apply for Membership
        </button>
      </Motion.div>
    </Motion.div>
  );
}
