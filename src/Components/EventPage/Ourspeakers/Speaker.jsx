import React from "react";
import { motion as Motion } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import speakersData from "./speakerData";

export default function Speaker() {
  const ceo = speakersData[0];
  const others = speakersData.slice(1);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-black text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">
            Our <span className="text-[#CC8821]">Speakers</span>
          </h1>
          <p className="text-gray-300 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="relative w-full max-w-[16rem] md:max-w-[27rem] h-[16rem] md:h-[27rem] overflow-hidden rounded-md shadow-lg md:ml-auto">
          {/* CEO Image */}
          <img
            src={ceo.img}
            alt={ceo.name}
            className="w-full h-full object-cover"
          />

          {/* Info Card Overlay */}
          <div className="group absolute bottom-4 left-3 right-3 bg-white p-2 md:p-4 border-l-4 md:border-l-8 border-[#CC8821] overflow-hidden">
            {/* Animated Background Overlay */}
            <span className="absolute inset-0 bg-[#CC8821] scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              {/* CEO Info */}
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
                    className="text-black bg-white p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-md"
                    aria-label="Visit Facebook profile"
                  >
                    <FaFacebookF className="text-xl sm:text-2xl" />
                  </a>
                )}
                {ceo.social?.whatsapp && (
                  <a
                    href={ceo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white rounded-full p-2 sm:p-3 hover:scale-110 transition-all duration-300 hover:bg-green-600 hover:text-white shadow-md"
                    aria-label="Contact via WhatsApp"
                  >
                    <FaWhatsapp className="text-xl sm:text-2xl" />
                  </a>
                )}
                {ceo.social?.linkedin && (
                  <a
                    href={ceo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white rounded-full p-2 sm:p-3 hover:scale-110 transition-all duration-300 hover:bg-blue-700 hover:text-white shadow-md"
                    aria-label="Visit LinkedIn profile"
                  >
                    <FaLinkedinIn className="text-xl sm:text-2xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {others.map((speaker, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs h-64 overflow-hidden shadow-md"
          >
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />

            <div className="group absolute bottom-4 left-3 right-3 bg-white p-5 border-l-8 border-[#CC8821] overflow-hidden">
              <span className="absolute inset-0 bg-[#CC8821] scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
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
                      className="text-black rounded-full bg-white p-1.5 hover:scale-110 transition hover:bg-green-600 hover:text-white"
                    >
                      <FaWhatsapp className="text-2xl" />
                    </a>
                  )}
                  {speaker.social?.linkedin && (
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black rounded-full bg-white p-1.5 hover:scale-110 transition hover:bg-blue-700 hover:text-white"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
