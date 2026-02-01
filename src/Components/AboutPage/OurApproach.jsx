import React from 'react'
import { motion } from 'framer-motion'
import { GoArrowRight } from "react-icons/go";

export default function OurApproach() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, 
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <div className="py-20 px-4 bg-black">
      <h1 className="flex justify-center text-3xl md:text-4xl text-white mb-10">
        Our Approach
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row gap-4 items-center justify-center"
      >
        {/* Box 1 */}
        <motion.div
          variants={item}
          whileHover={{ boxShadow: "0px 0px 15px 3px rgba(0, 112, 244, 0.7)" }}
          className="h-10 w-full md:w-40 bg-[rgba(204,136,33,1)] rounded font-semibold cursor-pointer transition-shadow duration-100"
        >
          <h1 className="pt-2 text-center text-sm md:text-base">1. Connect Leaders</h1>
        </motion.div>

        {/* Arrow 1 → 2 */}
        <motion.div variants={item} className="hidden md:flex text-white text-2xl">
          <GoArrowRight />
        </motion.div>

        {/* Box 2 */}
        <motion.div
          variants={item}
          whileHover={{ boxShadow: "0px 0px 15px 3px rgba(0, 112, 244, 0.7)" }}
          className="h-10 w-full md:w-40 bg-[rgba(204,136,33,1)] rounded font-semibold cursor-pointer transition-shadow duration-100"
        >
          <h1 className="pt-2 text-center text-sm md:text-base">2. Facilitate Learning</h1>
        </motion.div>

        {/* Arrow 2 → 3 */}
        <motion.div variants={item} className="hidden md:flex text-white text-2xl">
          <GoArrowRight />
        </motion.div>

        {/* Box 3 */}
        <motion.div
          variants={item}
          whileHover={{ boxShadow: "0px 0px 15px 3px rgba(0, 112, 244, 0.7)" }}
          className="h-10 w-full md:w-40 bg-[rgba(204,136,33,1)] rounded font-semibold cursor-pointer transition-shadow duration-100"
        >
          <h1 className="pt-2 text-center text-sm md:text-base">3. Build Partnerships</h1>
        </motion.div>
      </motion.div>
    </div>
  )
}
