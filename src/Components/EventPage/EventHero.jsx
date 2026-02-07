import React from "react";
import video from "../../assets/EventImages/leadership event.mp4";
import { motion as Motion } from "framer-motion";

export default function EventHero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <Motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          DEVHUB KABUL
        </Motion.h1>

        <Motion.span
          variants={itemVariants}
          className="inline-block text-transparent text-6xl md:text-8xl font-extrabold"
          style={{
            WebkitTextStroke: "2px #CC8821",
          }}
        >
          2025
        </Motion.span>

        <Motion.h1
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold leading-tight mt-2"
        >
          GITHUB-SPONSORED EVENT
        </Motion.h1>

        <Motion.div variants={itemVariants} className="flex gap-4 mt-8">
          <button
            onClick={() => scrollToSection("UpcomingEvent")}
            className="bg-[#CC8821] hover:bg-[#a66e1b] text-black font-bold py-3 px-6 rounded-lg transition-all"
          >
            Upcoming Events
          </button>

          <button
            onClick={() => scrollToSection("PastEvent")}
            className="border-2 border-[#CC8821] text-[#CC8821] hover:bg-[#CC8821] hover:text-black font-bold py-3 px-6 rounded-lg transition-all"
          >
            Past Events
          </button>
        </Motion.div>
      </Motion.div>
    </div>
  );
}
