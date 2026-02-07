import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import upcomingEvent from "./UpcomingEventData";
import eventIamge from "../../../assets/EventImages/eventimage.png";
import { motion as Motion } from "framer-motion"; 

import { Autoplay } from "swiper/modules";

export default function UpcomingEvent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,  
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
    <Motion.div
      id="UpcomingEvent"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-black py-10 px-4 md:px-10 md:my-20 w-full overflow-hidden"
    >
      <Motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-left"
      >
        Upcoming <span className="text-[#CC8821]">Events</span>
      </Motion.h1>

      <Motion.div variants={itemVariants}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {upcomingEvent.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="relative max-w-full mx-auto rounded-xl overflow-hidden p-1">
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    padding: "3px",
                    background:
                      "conic-gradient(from var(--angle), #FF9A00, #CC8821, #0821E0, #FF9A00)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                    animation: "spinGradient 6s linear infinite",
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row bg-black rounded-xl overflow-hidden">
                  <div className="md:w-1/2 p-6">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={eventIamge}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-1/2 bg-black p-6 flex flex-col justify-between text-white">
                    <Motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-12">
                        {event.title.split(" – ")[0]}{" "}
                        <span className="text-[#CC8821]">
                          {event.title.split(" – ")[1]}
                        </span>
                      </h2>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                    </Motion.div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt={event.speakers}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold">{event.speakers}</h4>
                          <span className="text-gray-400 text-sm">
                            {event.job}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col text-gray-300 text-sm gap-1">
                        <span>{event.time}</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion.div>

      <style>
        {`
          @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
          }

          @keyframes spinGradient {
            from { --angle: 0deg; }
            to { --angle: 360deg; }
          }
        `}
      </style>
    </Motion.div>
  );
}
