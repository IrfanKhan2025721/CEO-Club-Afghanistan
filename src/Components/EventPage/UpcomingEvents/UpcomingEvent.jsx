import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import upcomingEvent from "./UpcomingEventData";
import eventIamge from "../../../assets/EventImages/eventimage.png";

import { Autoplay } from "swiper/modules";

export default function UpcomingEvent() {
  return (
    <div className="bg-black py-10 px-4 md:px-10 w-full">
      {/* Header aligned left */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-left">
        Upcoming <span className="text-[#CC8821]">Events</span>
      </h1>

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
            {/* Animated Border Container */}
            <div className="relative max-w-full mx-auto rounded-xl overflow-hidden p-1">
              {/* Rotating Gradient Border */}
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

              {/* Inner Event Card */}
              <div className="relative z-10 flex flex-col md:flex-row bg-black rounded-xl overflow-hidden">
                {/* Event Image */}
                <div className="md:w-1/2 p-6">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={eventIamge}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Event Info */}
                <div className="md:w-1/2 bg-black p-6 flex flex-col justify-between text-white">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-12">
                      {event.title.split(" – ")[0]}{" "}
                      <span className="text-[#CC8821]">
                        {event.title.split(" – ")[1]}
                      </span>
                    </h2>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Speaker */}
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

                    {/* Time & Location */}
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

      {/* Rotating gradient animation CSS */}
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
    </div>
  );
}
