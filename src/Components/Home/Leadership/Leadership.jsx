import React, { useEffect } from "react";
import leadersData from "./LeadershipData";

export default function Leadership() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pt-20 pb-20 bg-black text-white">
      {/* Center line */}
      <div className="hidden md:block absolute left-1/2 top- h-[47rem] w-[2px] bg-yellow-400 -translate-x-1/2"></div>

      <div className="space-y-24">
        {leadersData.map((leader, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className="timeline-item flex items-center justify-center gap-20 px-4"
            >
              {/* Left */}
              {isEven ? (
                <TextCard leader={leader} />
              ) : (
                <ImageCard leader={leader} />
              )}

              {/* Number */}
              <div className="z-10">
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Right */}
              {isEven ? (
                <ImageCard leader={leader} />
              ) : (
                <TextCard leader={leader} right />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TextCard({ leader, right }) {
  return (
    <div
      className={`w-80 h-52 p-6 texr rounded-xl bg-[#0b0b0b]
      shadow-[0_0_25px_rgba(255,255,255,0.08)]
      border border-gray-800
      ${right ? "text-right" : "text-left"}`}
    >
      <h1 className="text-2xl font-bold">{leader.title}</h1>
      <p className="leading-7 mt-4 text-gray-400">{leader.description}</p>
    </div>
  );
}

function ImageCard({ leader }) {
  return (
    <img
      className="w-80 rounded-xl shadow-lg object-cover"
      src={leader.image}
      alt={leader.title}
    />
  );
}
