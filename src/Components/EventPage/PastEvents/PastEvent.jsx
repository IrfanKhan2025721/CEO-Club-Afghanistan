import React from "react";
import { FaYoutube } from "react-icons/fa";

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

  return (
    <div className="flex flex-wrap justify-center gap-10 my-20">
      {pastEvent.map((past) => (
        <a
          key={past.id}
          href={past.videoLink}
          target="_blank"
          rel="noreferrer"
          className="group w-[340px]"
        >
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            {/* Thumbnail */}
            <img
              src={past.thumbnail}
              alt={past.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />

            {/* Center Title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="z-10 text-[#CC8821] text-3xl font-bold text-center drop-shadow-lg">
                {past.title}
              </h3>
            </div>

            {/* YouTube icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FaYoutube className="text-red-600 text-7xl" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
