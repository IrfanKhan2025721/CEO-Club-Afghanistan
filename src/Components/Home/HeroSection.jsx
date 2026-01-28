import React from "react";
import heroImg from "../../assets/HomeImages/hero.jpg";

export default function HeroSection() {
  const heroData = [
    {
      id: 0,
      title: "Connecting Leaders",
      description: "Empowering Talent, Shaping the future of Afghanistan.",
    },
  ];

  return (
    <div>
      {heroData.map((text) => (
        <div
          key={text.id}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroImg})`,
          }}
          className="
            h-[400px] sm:h-[500px] md:h-[600px]
            bg-cover bg-center
            flex flex-col justify-center
            px-4 sm:px-8 md:px-16
            text-white
          "
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {text.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mt-3">
              {text.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
            <button className="bg-gradient-to-r from-black to-[#D28B1D] hover:from-gray-900 hover:to-yellow-400 transition rounded-full py-2 px-6 text-sm sm:text-base text-white">
              Join CEO Club
            </button>

            <button className="border border-[#D28B1D] hover:bg-yellow-400 hover:text-black transition rounded-full py-2 px-6 text-sm sm:text-base">
              Join CEO Club
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
