import React from "react";
import { FaYoutube } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function PastEvent() {
  const pastEvent = [
    {
      id: 0,
      videoLink: "https://www.youtube.com/watch?v=STsNXo7MVi0",
      title: "2025 Highlights",
      thumbnail: "https://img.youtube.com/vi/STsNXo7MVi0/hqdefault.jpg",
    },
    {
      id: 1,
      videoLink: "https://www.youtube.com/watch?v=FvzivjIiJro",
      title: "2025 Highlights",
      thumbnail: "https://img.youtube.com/vi/FvzivjIiJro/hqdefault.jpg",
    },
    {
      id: 2,
      videoLink: "https://www.youtube.com/watch?v=3cA79IERvS4",
      title: "2025 Highlights",
      thumbnail: "https://img.youtube.com/vi/3cA79IERvS4/hqdefault.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Motion.div
      id="PastEvent"
      className="my-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl md:ml-48 font-bold text-white  mb-10"
      >
        Past <span className="text-[#CC8821]">Events</span>
      </Motion.h2>

      <Motion.div
        className="flex flex-wrap justify-center gap-10"
        variants={containerVariants}
      >
        {pastEvent.map((past) => (
          <Motion.a
            key={past.id}
            variants={itemVariants}
            href={past.videoLink}
            target="_blank"
            rel="noreferrer"
            className="group w-[340px]"
          >
            <div className="relative h-[300px] overflow-hidden rounded-xl">
              <Motion.img
                src={past.thumbnail}
                alt={past.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="z-10 text-[#CC8821] text-3xl font-bold text-center drop-shadow-lg">
                  {past.title}
                </h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaYoutube className="text-red-600 text-7xl" />
              </div>
            </div>
          </Motion.a>
        ))}
      </Motion.div>
    </Motion.div>
  );
}
