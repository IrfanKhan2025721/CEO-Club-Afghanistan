import React, { useState, useEffect } from "react";
import whoWeAre from "../../assets/AboutImages/whoWeAre.svg";
import { motion as Motion } from "framer-motion";

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isToggleScreen = windowWidth <= 768;

  const fullText = (
    <>
      CEO Club Afghanistan is a professional organization devoted to empowering
      Afghan CEOs, executives, and rising leaders. Our network brings together
      key decision-makers from across sectors to champion a collaborative,
      ethical, and visionary business community.
      <br />
      <br />
      We believe knowledge-sharing is essential to Afghanistan’s economic and
      social advancement. By connecting Afghan talent with global resources and
      opportunities, we encourage ethical leadership and inclusive growth.
      <br />
      <br />
      Promoting women and youth leadership, innovation, and sustainable
      development are core to our vision. CEO Club Afghanistan provides a
      trusted platform for networking, partnerships, and excellence, helping
      shape a brighter, more inclusive future.
    </>
  );

  const partialText = (
    <>
      CEO Club Afghanistan is a professional organization devoted to empowering
      Afghan CEOs, executives, and rising leaders. Our network brings together
      key decision-makers from across sectors to champion a collaborative,
      ethical, and visionary business community.
    </>
  );

  return (
    <section className="bg-black px-4 md:px-16 2xl:px-44 py-10 md:py-16 overflow-hidden">
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-10"
      >
        <span className="text-orange-400">Who</span> We Are
      </Motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          layout
          className="md:w-1/2 flex flex-col justify-center space-y-4"
        >
          {isToggleScreen ? (
            <div className="flex flex-col">
              <Motion.div
                layout
                className="text-white text-base md:text-lg mb-2"
              >
                {isExpanded ? fullText : partialText}
              </Motion.div>
              <div className="flex justify-start">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-orange-400 font-semibold hover:underline"
                >
                  {isExpanded ? "Read less ▲" : "Read more ▼"}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white text-base md:text-lg">{fullText}</p>
          )}
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Motion.img
            whileHover={{ scale: 1.02 }}
            src={whoWeAre}
            alt="Who We Are"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </Motion.div>
      </div>
    </section>
  );
}
