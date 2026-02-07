import React from "react";
import { motion as Motion } from "framer-motion";

export default function JoinLeaderShip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex justify-center items-center py-20 px-4 overflow-hidden">
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden p-10 text-center"
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            padding: "3px",
            background:
              "conic-gradient(from var(--angle), #FF9A00, #000000, #0821E0, #FF9A00)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            animation: "spinGradient 6s linear infinite",
          }}
        />

        <div className="relative z-10 space-y-6">
          <Motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Join Afghanistan’s Leadership Movement
          </Motion.h1>

          <Motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-xl mx-auto"
          >
            Be part of a network shaping the future of Afghanistan business and
            innovation.
          </Motion.p>

          <Motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <a
              href="#Joinclub"
              className="bg-[#FF9A00] hover:bg-[#e68a00] text-black font-bold py-3 px-10 rounded-full transition-colors no-underline"
            >
              Join Now
            </a>
            <a
              href="#Joinclub"
              className="border-2 border-[#FF9A00] text-[#FF9A00] hover:bg-[#FF9A00] hover:text-black font-bold py-3 px-8 rounded-full transition-all no-underline"
            >
              Partner with Us
            </a>
          </Motion.div>
        </div>

        <style>
          {`
            @property --angle {
              syntax: '<angle>';
              initial-value: 0deg;
              inherits: false;
            }

            @keyframes spinGradient {
              from { --angle: 0deg; }
              to { --angle: 360deg; }
            }

            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </Motion.div>
    </div>
  );
}
