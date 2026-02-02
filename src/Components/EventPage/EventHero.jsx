import React from "react";
import video from "../../assets/EventImages/leadership event.mp4";

export default function EventHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          DEVHUB KABUL <br />
          <span
            className="inline-block text-transparent text-6xl md:text-8xl font-extrabold"
            style={{
              WebkitTextStroke: "2px #CC8821",
            }}
          >
            2025
          </span>
          <br />
          GITHUB-SPONSORED EVENT
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-[#CC8821] hover:bg-[#a66e1b] text-black font-bold py-3 px-6 rounded-lg transition-all">
            Upcoming Events
          </button>

          <button className="border-2 border-[#CC8821] text-[#CC8821] hover:bg-[#CC8821] hover:text-black font-bold py-3 px-6 rounded-lg transition-all">
            Past Events
          </button>
        </div>
      </div>
    </div>
  );
}
