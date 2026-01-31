import React from 'react'

export default function TrustedBy() {
  return (
    <div className="relative mt-10 bg-black py-12 overflow-hidden">
      <h2 className="text-2xl md:text-5xl text-white text-center font-bold  mb-20">
        Trusted By
      </h2>

      {/* Side shadow overlays */}
      <div className="hidden md:block pointer-events-none absolute top-0 left-0 h-full w-80 bg-gradient-to-r from-black z-20" />
      <div className="hidden md:block pointer-events-none absolute top-0 right-0 h-full w-80 bg-gradient-to-l from-black z-20" />

      
      <Swiper
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={true} // disable dragging
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
            {/* Responsive width container */}
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

    <div>
    </div>
  )
}
