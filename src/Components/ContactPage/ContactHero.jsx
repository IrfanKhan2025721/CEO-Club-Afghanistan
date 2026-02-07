import React from "react";
import { motion } from "framer-motion";
import eventImage from "../../assets/EventImages/eventimage.png";

function ContactHero() {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${eventImage})` }}
    >
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT CONTENT */}
      <motion.div
        variants={textVariant}
        className="relative z-10 text-center"
      >
        <h2 className="text-white font-bold text-[2.7rem] sm:text-[3.2rem] md:text-[4rem] xlg:text-[5rem]">
          Contact Us
        </h2>
        <h4 className="text-white font-serif text-[1.2rem] sm:text-[1.6rem] md:text-[2rem]">
          Reach CEO Club Afghanistan
        </h4>
      </motion.div>
    </motion.div>
  );
}

export default ContactHero;
