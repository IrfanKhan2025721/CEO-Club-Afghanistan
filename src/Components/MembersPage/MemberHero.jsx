import React from "react";
import { motion as Motion } from "framer-motion";  

export default function AboutHero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="w-full flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "85vh",
      }}
    >
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"  
        className="text-center px-6 py-10 rounded-2xl"
      >
        <Motion.h1
          variants={itemVariants}
          className="text-5xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Club Members
        </Motion.h1>

        <Motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl font-light text-gray-100 max-w-2xl mx-auto"
        >
          Meet the visionary leaders shaping Afghanistan’s future.
        </Motion.p>
      </Motion.div>
    </div>
  );
}
