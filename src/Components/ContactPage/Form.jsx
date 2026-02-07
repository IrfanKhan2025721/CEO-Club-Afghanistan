import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/ContacImages/Capture.PNG";

export default function Form() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      {/* Text Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-black px-2 pt-[4rem] lg:pb-[4rem] lg:pt-[8rem] leading-[1.5rem] sm:leading-[2rem] md:leading-[2.2rem] lg:leading-[2.4rem] text-center text-white font-bold sm:px-[3rem] md:px-[4rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]"
      >
        <p>
          We’d love to hear from you — whether{" "}
          <span className="lg:block">you’re a CEO, innovator, or partner</span>{" "}
          <span className="lg:block">interested in joining our network.</span>
        </p>
        <p className="text-[rgba(204,136,33,1)]">
          Reach out to us for collaborations,{" "}
          <span className="lg:block">events, or general inquiries.</span>
        </p>
      </motion.div>

      {/* Form Section */}
      <section className="pt-[4rem] pb-[7rem] px-6 bg-black flex flex-col md:flex-row md:justify-evenly gap-[3rem]">

        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1 md:order-2 w-full lg:w-auto flex justify-center"
        >
          <img
            src={hero}
            alt="Contact"
            className="w-full max-w-[500px] rounded-[1.5rem] object-cover"
          />
        </motion.div>

        {/* Form */}
        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="order-2 md:order-1 flex flex-col gap-6 rounded-[1.5rem] p-6 w-full lg:w-1/2 shadow-[0_0_20px_rgba(204,136,33,0.6)]"
        >
          <motion.div variants={fadeItem} className="sm:flex sm:justify-between gap-2">
            <div className="text-white flex flex-col gap-2 sm:w-1/2">
              <label htmlFor="name" className="font-bold text-[0.9rem]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter you name"
                required
                className="bg-[rgba(31,31,34,1)] text-[rgba(115,115,115,1)] rounded-[0.8rem] py-2 px-3"
              />
            </div>

            <div className="text-white flex flex-col gap-2 sm:w-1/2">
              <label htmlFor="email" className="font-bold text-[0.9rem]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                className="bg-[rgba(31,31,34,1)] text-[rgba(115,115,115,1)] rounded-[0.8rem] p-2 px-3"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeItem} className="text-white flex flex-col gap-2">
            <label htmlFor="message" className="font-bold text-[0.9rem]">
              Message
            </label>
            <textarea
              rows={7}
              name="message"
              id="message"
              placeholder="Your message..."
              required
              className="bg-[rgba(31,31,34,1)] text-[rgba(115,115,115,1)] rounded-[0.8rem] p-2 px-3"
            />
          </motion.div>

          <motion.button
            variants={fadeItem}
            className="bg-[#CC8821] hover:bg-[#a66e1b] text-black font-bold py-1 px-4 rounded-lg transition-all"
          >
            Submit
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
