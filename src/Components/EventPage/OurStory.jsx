import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function OurStory() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const attendees = [
    "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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

  const attendeeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="bg-black text-white px-6 md:px-20 py-24 overflow-hidden">
      <Motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Motion.div variants={containerVariants} className="space-y-6">
          <Motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold uppercase"
          >
            Our <span className="text-[#CC8821] underline">Story</span>
          </Motion.h1>

          <Motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-gray-200"
          >
            The importance of Leadership Conference in 2022
          </Motion.h2>

          <Motion.p
            variants={itemVariants}
            className="text-gray-400 leading-relaxed"
          >
            The CEO Club of Afghanistan organized a Leadership Conference in
            2022, bringing together business leaders, entrepreneurs, and
            professionals from various industries. The conference aimed to
            foster collaboration, share insights, and promote leadership
            excellence in Afghanistan.
          </Motion.p>

          <Motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <button
              onClick={() => scrollToSection("Speaker")}
              className="bg-[#CC8821] hover:bg-[#a66e1b] text-black font-bold py-3 px-6 rounded-lg transition-all"
            >
              Meet Speakers
            </button>
            <button
              onClick={() => scrollToSection("UpcomingEvent")}
              className="border-2 border-[#CC8821] text-[#CC8821] hover:bg-[#CC8821] hover:text-black font-bold py-3 px-6 rounded-lg transition-all"
            >
              Check out Schedule
            </button>
          </Motion.div>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          className="flex flex-col space-y-8 md:pl-10"
        >
          <Motion.p
            variants={itemVariants}
            className="text-gray-400 border-l-4 border-[#CC8821] pl-4"
          >
            The CEO Club played a crucial role in inspiring and empowering the
            business community in Afghanistan.
          </Motion.p>

          <Motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <Motion.div
              variants={containerVariants}
              className="flex -space-x-4"
            >
              {attendees.map((src, i) => (
                <Motion.img
                  key={i}
                  variants={attendeeVariants}
                  src={src}
                  alt="Attendee avatar"
                  onClick={() => navigate("/Members")}
                  className="w-[51px] h-[51px] rounded-full border-2 border-black object-cover cursor-pointer"
                />
              ))}
            </Motion.div>

            <Motion.p
              variants={attendeeVariants}
              className="text-sm md:text-base font-medium text-white"
            >
              120+ People are attending with us
            </Motion.p>
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </div>
  );
}
