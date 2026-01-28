import React from "react";
import CountUp from "./CountUp";

export default function Counter() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-12">
      {/* Founder */}
      <div className="flex flex-col items-center text-white">
        <CountUp
          from={0}
          to={30}
          separator=","
          direction="up"
          duration={2}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          startWhen
        />
        <span className="mt-2 text-base md:text-lg font-medium text-[#BB7D1E]">
          Founder
        </span>
      </div>

      {/* Line */}
      <div
        className="
        h-px w-24 md:w-px md:h-20
        bg-gradient-to-r md:bg-gradient-to-b
        from-[#1b1a1a] via-yellow-500 to-[#1b1a1a]
      "
      ></div>

      {/* Members */}
      <div className="flex flex-col items-center text-white">
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={2}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          startWhen
        />
        <span className="mt-2 text-base md:text-lg font-medium text-[#BB7D1E]">
          Members Joined
        </span>
      </div>

      {/* Line */}
      <div
        className="
        h-px w-24 md:w-px md:h-20
        bg-gradient-to-r md:bg-gradient-to-b
        from-[#1b1a1a] via-yellow-500 to-[#1b1a1a]
      "
      ></div>

      {/* Partners */}
      <div className="flex flex-col items-center text-white">
        <CountUp
          from={0}
          to={10}
          separator=","
          direction="up"
          duration={2}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          startWhen
        />
        <span className="mt-2 text-base md:text-lg font-medium text-[#BB7D1E]">
          Partners
        </span>
      </div>
    </div>
  );
}
