import React from "react";
import { motion as Motion } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import speakersData from "./speakerData";

export default function Speaker() {
  const ceo = speakersData[0];
  const others = speakersData.slice(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
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
    <section
      id="Speaker"
      className="max-w-7xl mx-auto px-4 py-16 bg-black text-white overflow-hidden"
    >
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-10 items-center mb-20"
      >
        <Motion.div variants={itemVariants} className="md:ml-20">
          <h1 className="text-4xl font-extrabold mb-4">
            Our <span className="text-[#CC8821]">Speakers</span>
          </h1>
          <p className="text-gray-300 text-2xl max-w-xl">
            Our speakers are industry leaders, visionaries, and innovators. They
            bring real-world experience, success stories, and actionable
            insights to inspire and guide attendees.
          </p>
        </Motion.div>

        <Motion.div
          variants={itemVariants}
          className="relative w-full max-w-[16rem] md:max-w-[27rem] h-[16rem] md:h-[27rem] overflow-hidden shadow-lg md:ml-auto"
        >
          <img
            src={ceo.img}
            alt={ceo.name}
            className="w-full h-full object-cover"
          />
          <div className="group absolute bottom-4 left-3 right-3 bg-white p-2 md:p-4 border-l-4 md:border-l-8 border-[#CC8821] overflow-hidden">
            <span className="absolute inset-0 bg-[#CC8821] scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
                  {ceo.name}
                </h2>
                <p className="text-black group-hover:text-white text-sm uppercase font-semibold transition-colors duration-300">
                  {ceo.position}
                </p>
              </div>

              <div className="flex gap-2 sm:gap-3 opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                {ceo.social?.facebook && (
                  <a
                    href={ceo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white p-2 sm:p-3 rounded-full hover:bg-blue-600 hover:text-white shadow-md transition-all"
                  >
                    <FaFacebookF className="text-xl sm:text-2xl" />
                  </a>
                )}
                {ceo.social?.whatsapp && (
                  <a
                    href={ceo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white rounded-full p-2 sm:p-3 hover:bg-green-600 hover:text-white shadow-md transition-all"
                  >
                    <FaWhatsapp className="text-xl sm:text-2xl" />
                  </a>
                )}
                {ceo.social?.linkedin && (
                  <a
                    href={ceo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white rounded-full p-2 sm:p-3 hover:bg-blue-700 hover:text-white shadow-md transition-all"
                  >
                    <FaLinkedinIn className="text-xl sm:text-2xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Motion.div>
      </Motion.div>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {others.map((speaker, index) => (
          <Motion.div
            key={index}
            variants={itemVariants}
            className="relative w-full max-w-xs h-64 overflow-hidden shadow-md mx-auto"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
            <div className="group absolute bottom-4 left-3 right-3 bg-white p-5 border-l-8 border-[#CC8821] overflow-hidden">
              <span className="absolute inset-0 bg-[#CC8821] scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="max-w-[120px]">
                  <h3 className="text-xl font-bold text-black group-hover:text-white transition truncate">
                    {speaker.name}
                  </h3>
                  <p className="text-black group-hover:text-white text-xs uppercase font-medium transition">
                    {speaker.position}
                  </p>
                </div>
                <div className="flex gap-2 opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  {speaker.social?.whatsapp && (
                    <a
                      href={speaker.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black rounded-full bg-white p-1.5 hover:bg-green-600 hover:text-white transition"
                    >
                      <FaWhatsapp className="text-2xl" />
                    </a>
                  )}
                  {speaker.social?.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black rounded-full bg-white p-1.5 hover:bg-blue-700 hover:text-white transition"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
