import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

import heroimg1 from "../../assets/HomeImages/img-1.jpeg";
import heroimg2 from "../../assets/HomeImages/img-2.jpeg";
import heroimg3 from "../../assets/HomeImages/img-3.jpeg";
import heroimg4 from "../../assets/HomeImages/img-4.jpeg";
import heroimg5 from "../../assets/HomeImages/img-5.jpeg";
import heroimg6 from "../../assets/HomeImages/img-6.jpeg";
import heroimg7 from "../../assets/HomeImages/img-7.jpeg";
import heroimg8 from "../../assets/HomeImages/img-8.jpeg";
import heroimg9 from "../../assets/HomeImages/img-9.jpeg";
import heroimg10 from "../../assets/HomeImages/img-10.jpeg";
import heroimg11 from "../../assets/HomeImages/img-11.jpeg";

const AngledScroller = ({
  images,
  speed = 0.5,
  direction = "left",
  angle = 0,
  opacity = 1,
  top = 0,
}) => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);

  const imageWidth = 340;
  const gap = 24;
  const setWidth = images.length * (imageWidth + gap);
  const imageHeight = 190;

  useEffect(() => {
    let raf;

    const animate = () => {
      const move = direction === "left" ? -speed : speed;
      offsetRef.current += move;

      if (direction === "left" && offsetRef.current <= -setWidth) {
        offsetRef.current = 0;
      }

      if (direction === "right" && offsetRef.current >= 0) {
        offsetRef.current = -setWidth;
      }

      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction, speed, setWidth]);

  const containerWidth = 8000;

  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: "50%",
        width: `${containerWidth}px`,
        transform: `translateX(-50%) rotate(${angle}deg)`,
        opacity,
        zIndex: 1,
      }}
      className="pt-10"
    >
      <div ref={trackRef} className="flex gap-6">
        {[...images, ...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="rounded-lg object-cover shadow-lg flex-shrink-0"
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const navigate = useNavigate();

  const heroData = [
    {
      id: 0,
      title: "Connecting Leaders",
      description:
        "Empowering talent by connecting visionary leaders to collaborate, innovate, and shape the future of Afghanistan with integrity and purpose.",
    },
  ];

  const imageList = [
    heroimg1,
    heroimg2,
    heroimg3,
    heroimg4,
    heroimg5,
    heroimg6,
    heroimg7,
    heroimg8,
    heroimg9,
    heroimg10,
    heroimg11,
  ];

  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <AngledScroller
          images={imageList}
          speed={1}
          direction="left"
          angle={-2}
          opacity={0.7}
          top={0}
        />

        <AngledScroller
          images={imageList}
          speed={1}
          direction="right"
          angle={-2}
          opacity={0.5}
          top={31}
        />

        <AngledScroller
          images={imageList}
          speed={1}
          direction="left"
          angle={-2}
          opacity={0.3}
          top={62}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/50 z-10" />

      {heroData.map((text) => (
        <Motion.div
          key={text.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 sm:px-8 md:px-16 text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {text.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-2xl mt-3">
            {text.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
            <button
              onClick={() => navigate("/join-club")}
              className="bg-gradient-to-r from-black to-[#D28B1D] hover:from-gray-900 hover:to-yellow-400 transition rounded-full py-2 px-6 text-sm sm:text-base text-white"
            >
              Join CEO Club
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-[#D28B1D] hover:bg-gradient-to-r from-black to-[#D28B1D] hover:border-none transition rounded-full py-2 px-10 text-sm sm:text-base text-white"
            >
              Contact
            </button>
          </div>
        </Motion.div>
      ))}
    </Motion.div>
  );
}
