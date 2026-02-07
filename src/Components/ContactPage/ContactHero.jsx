import React from "react";
import eventImage from "../../assets/EventImages/eventimage.png";

function ContactHero() {
  return (
    <div className="-mt-16">
      <div
        className="relative mt-[4rem] h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${eventImage})` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-white font-bold text-[2.7rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5rem] leading-tight">
            Contact Us
          </h2>
          <h4 className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Reach CEO Club Afghanistan. Have questions about membership,
            upcoming summits, or partnership opportunities? Our team is here to
            support the next generation of Afghan business leaders. Connect with
            us today.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
