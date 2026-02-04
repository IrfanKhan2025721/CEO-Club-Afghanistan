import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  speed,
  direction = "left",
  angle = 0,
  opacity = 1,
  top = 0,
}) => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const imageWidth = 340;
  const gap = 24;
  const imageHeight = 190;

  useEffect(() => {
    let animationId;
    const track = trackRef.current;
    if (!track) return;

    // Calculate width of one complete set
    const setWidth = images.length * (imageWidth + gap);

    const animate = () => {
      if (direction === "left") {
        offsetRef.current -= speed;
        if (Math.abs(offsetRef.current) >= setWidth) {
          offsetRef.current += setWidth;
        }
      } else {
        offsetRef.current += speed;
        if (offsetRef.current >= setWidth) {
          offsetRef.current -= setWidth;
        }
      }

      track.style.transform = `translateX(${offsetRef.current}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed, direction, images.length]);

  // Very wide container to handle rotation
  const containerWidth = 8000;

  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: "50%",
        width: `${containerWidth}px`,
        transform: `translateX(-50%) rotate(${angle}deg)`,
        opacity: opacity,
        zIndex: 1,
      }}
      className="pt-10"
    >
      <div ref={trackRef} className="flex gap-6" style={{ display: "flex" }}>
        {[
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
        ].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="rounded-lg object-cover shadow-lg"
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              flexShrink: 0,
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

  const imageList = [heroimg1, heroimg2, heroimg3, heroimg4, heroimg5, heroimg6 , heroimg7, heroimg8, heroimg9, heroimg10, heroimg11];

  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Animated angled scrolling background */}
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

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/50 z-10"></div>

      {/* Content */}
      {heroData.map((text) => (
        <div
          key={text.id}
          className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4 sm:px-8 md:px-16 text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {text.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mt-3">
            {text.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
            {/* Join CEO Club button - navigates to membership page */}
            <button
              onClick={() => navigate("/join-club")}
              className="bg-gradient-to-r from-black to-[#D28B1D] hover:from-gray-900 hover:to-yellow-400 transition rounded-full py-2 px-6 text-sm sm:text-base text-white"
            >
              Join CEO Club
            </button>

            {/* Contact button - navigates to contact page */}
            <button
              onClick={() => navigate("/contact")}
              className="border border-[#D28B1D] hover:bg-gradient-to-r from-black to-[#D28B1D] hover:border-none transition rounded-full py-2 px-10 text-sm sm:text-base text-white"
            >
              Contact
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
