import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  {
    id: 1,
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 2,
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    altColor: true,
  },
  { id: 3, name: "Samsung", src: "https://logo.svgcdn.com/logos/samsung.svg" },
  {
    id: 4,
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 5,
    name: "GitHub",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    altColor: true,
  },
  {
    id: 6,
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 7,
    name: "Facebook",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 8,
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 9,
    name: "Intel",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
  },
  {
    id: 10,
    name: "Spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
];

export default function TrustedBy() {
  return (
    <div className="relative mt-10 bg-black py-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl text-white text-center font-semibold  mb-20">
        Trusted By
      </h2>

      {/* Side shadow overlays */}
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 h-full w-80 bg-gradient-to-r from-black z-20" />
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 h-full w-80 bg-gradient-to-l from-black z-20" />

      <Swiper
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 0 },
          640: { slidesPerView: 3, spaceBetween: 0 },
          768: { slidesPerView: 5, spaceBetween: 0 },
          1024: { slidesPerView: 6, spaceBetween: 0 },
        }}
        className="!overflow-visible"
      >
        {logos.concat(logos).map((logo, idx) => (
          <SwiperSlide
            key={`${logo.id}-${idx}`}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-28 md:w-32 lg:w-40 flex justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className={`h-10 sm:h-12 md:h-14 w-auto object-contain ${
                  logo.altColor ? "invert brightness-200" : ""
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
