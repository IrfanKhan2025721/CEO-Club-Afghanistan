import React from "react";
import { motion as Motion } from "framer-motion";
import leadersData from "./LeadershipData";

export default function Leadership() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative pt-20 pb-20 bg-black text-white overflow-hidden">
      <Motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-24 px-4"
      >
        <h2 className="text-yellow-400 font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3">
          Operational Excellence
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Strategic <span className="text-yellow-400">Objectives</span>
        </h1>
        <div className="flex justify-center items-center gap-6 mt-8">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gray-500"></div>
          <div className="w-2 h-2 rotate-45 bg-yellow-400 shadow-[0_0_10px_#facc15]"></div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gray-500"></div>
        </div>
        <p className="text-gray-400 mt-6 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Driving growth and fostering innovation across Afghanistan's business
          landscape through targeted excellence.
        </p>
      </Motion.div>

      <div className="absolute left-7 lg:left-1/2 top-[27rem] w-[2px] bg-yellow-400 -translate-x-1/2 h-[123rem] md:h-[90rem] lg:h-[50rem] xl:h-[55rem] 2xl:h-[59rem]"></div>

      <div className="space-y-16 lg:space-y-28">
        {leadersData.map((leader, index) => {
          const isEven = index % 2 === 0;

          return (
            <Motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="relative flex flex-col lg:flex-row items-center justify-center px-4"
            >
              <div className="absolute left-7 lg:left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-sm lg:text-xl border-4 border-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[5vw] ml-14 lg:ml-0">
                <div className="hidden lg:block">
                  {isEven ? (
                    <TextCard
                      leader={leader}
                      index={index}
                      variants={itemVariants}
                    />
                  ) : (
                    <ImageCard leader={leader} variants={itemVariants} />
                  )}
                </div>

                <div className="flex lg:hidden flex-col gap-10 items-start">
                  <ImageCard
                    leader={leader}
                    isTabletView
                    variants={itemVariants}
                  />
                  <TextCard
                    leader={leader}
                    isTabletView
                    index={index}
                    variants={itemVariants}
                  />
                </div>

                <div className="hidden lg:block">
                  {isEven ? (
                    <ImageCard leader={leader} variants={itemVariants} />
                  ) : (
                    <TextCard
                      leader={leader}
                      index={index}
                      variants={itemVariants}
                    />
                  )}
                </div>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TextCard({ leader, isTabletView, index, variants }) {
  const colors = ["#4D59B9", "#CC8821", "#4D59B9"];
  const glowColor = colors[index % 3] || "#4D59B9";

  return (
    <Motion.div
      variants={variants}
      className={`
        p-6 rounded-xl bg-[#0b0b0b] border border-gray-800 
        flex flex-col justify-center text-left
        ${
          isTabletView
            ? "w-[16rem] md:w-[32rem] h-[22rem] md:h-[16rem]"
            : "w-[clamp(28rem,35vw,45rem)] h-[clamp(16rem,20vw,22rem)]"
        }
      `}
      style={{ boxShadow: `0 0 25px ${glowColor}` }}
    >
      <h1 className="text-xl lg:text-3xl font-bold text-white mb-2 leading-tight text-left">
        {leader.title}
      </h1>
      <p className="text-gray-400 text-sm lg:text-base leading-relaxed text-left">
        {leader.description}
      </p>
    </Motion.div>
  );
}

function ImageCard({ leader, isTabletView, variants }) {
  return (
    <Motion.img
      variants={variants}
      className={`
        rounded-xl shadow-2xl object-cover border border-gray-900
        ${
          isTabletView
            ? "w-[16rem] md:w-[32rem] h-[22rem] md:h-[16rem]"
            : "w-[clamp(28rem,35vw,45rem)] h-[clamp(16rem,20vw,22rem)]"
        }
      `}
      src={leader.image}
      alt={leader.title}
    />
  );
}
