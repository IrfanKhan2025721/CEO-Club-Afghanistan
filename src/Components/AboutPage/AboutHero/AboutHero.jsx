import React from "react";
import CountUp from "./CountUp";

export default function AboutHero() {
  return (
    <div
      className="relative py-24 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Text section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About CEO Club Afghanistan
        </h1>

        <h3 className="text-xl md:text-2xl text-[#FF9A00] mb-6">
          Building Ethical Leadership. Empowering Afghan Excellence.
        </h3>

        <p className="max-w-3xl mx-auto text-gray-300 mb-14">
          CEO Club Afghanistan is a professional platform uniting Afghan CEOs,
          entrepreneurs, and changemakers for a sustainable and prosperous
          Afghanistan.
        </p>

        {/* Counters */}
        <div className="flex flex-col md:flex-row justify-center gap-16">
          {/* Members */}
          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={100}
              duration={2}
              className="text-5xl md:text-6xl font-bold text-white"
              startWhen
            />
            <h1 className="mt-2 text-lg md:text-xl text-[#BB7D1E]">Members</h1>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={30}
              duration={2}
              className="text-5xl md:text-6xl font-bold text-white"
              startWhen
            />
            <h1 className="mt-2 text-lg md:text-xl text-[#BB7D1E]">Events</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
