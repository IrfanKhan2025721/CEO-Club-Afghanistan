import React, { useState, useEffect } from "react";

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isToggleScreen = windowWidth <= 768;

  // Added <div> wrappers and space-y-6 to create real gaps between paragraphs
  const fullText = (
    <div className="space-y-6 leading-relaxed">
      <p>
        CEO Club Afghanistan celebrates the journeys of Afghan CEOs, founders,
        and innovators shaping the nation’s business landscape. Each member
        brings unique leadership and vision, inspiring new generations.
      </p>
      <p>
        Our members drive industry transformation across technology, commerce,
        and development while building a global network of mentorship,
        partnership, and positive impact.
      </p>
      <p>
        We honor these leaders for their contributions to Afghanistan’s
        regeneration and international engagement, forging a new era of
        sustainable growth.
      </p>
    </div>
  );

  const partialText = (
    <div className="leading-relaxed">
      <p>
        CEO Club Afghanistan celebrates the journeys of Afghan CEOs, founders,
        and innovators shaping the nation’s business landscape. Each member
        brings unique leadership and vision, inspiring new generations.
      </p>
    </div>
  );

  return (
    <section className="bg-black px-4 md:px-16 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-6">
        <span className="text-orange-400">Our</span> Distinguished Members
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Added pt-8 to bring the text section down relative to the header/image */}
        <div className="md:w-1/2 flex flex-col pt-4 md:pt-8 text-white text-base md:text-lg">
          {isToggleScreen ? (
            <div className="flex flex-col">
              <div className="mb-4">{isExpanded ? fullText : partialText}</div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-orange-400 font-semibold hover:underline w-fit"
              >
                {isExpanded ? "Read less ▲" : "Read more ▼"}
              </button>
            </div>
          ) : (
            <div>{fullText}</div>
          )}
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1661759404487-083b4a9703e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Who We Are"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
