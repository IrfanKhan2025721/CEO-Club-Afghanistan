import React from "react";
import CountUp from "./CountUp";
import { motion as Motion } from "framer-motion";

export default function AboutHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="relative py-24 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <Motion.div
        className="relative max-w-6xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About CEO Club Afghanistan
        </Motion.h1>

        <Motion.h3
          variants={fadeInUp}
          className="text-xl md:text-2xl text-[#FF9A00] mb-6"
        >
          Building Ethical Leadership. Empowering Afghan Excellence.
        </Motion.h3>

        <Motion.p
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-gray-300 mb-14"
        >
          CEO Club Afghanistan is a professional platform uniting Afghan CEOs,
          entrepreneurs, and changemakers for a sustainable and prosperous
          Afghanistan.
        </Motion.p>

        <Motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={100}
              duration={2}
              className="text-4xl md:text-5xl font-bold text-white"
              startWhen
            />
            <h1 className="mt-2 text-base md:text-lg font-medium text-[#BB7D1E]">
              Members
            </h1>
          </div>

          <div className="h-px w-24 md:w-px md:h-20 bg-gradient-to-r md:bg-gradient-to-b from-[#1b1a1a] via-yellow-500 to-[#1b1a1a]"></div>

          <div className="flex flex-col items-center">
            <CountUp
              from={0}
              to={30}
              duration={2}
              className="text-4xl md:text-5xl font-bold text-white"
              startWhen
            />
            <h1 className="mt-2 text-base md:text-lg font-medium text-[#BB7D1E]">
              Events
            </h1>
          </div>
        </Motion.div>
      </Motion.div>
    </div>
  );
}
