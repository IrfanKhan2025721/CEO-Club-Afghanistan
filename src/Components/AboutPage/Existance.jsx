import React from "react";
import { motion as Motion } from "framer-motion";
import img1 from "../../assets/AboutImages/Rectangle 38.jpg";
import {
  Crown,
  Users,
  HeartHandshake,
  Rocket,
  Globe,
  BookOpen,
} from "lucide-react";

const MotionCard = ({ icon: Icon, text, variants }) => {
  return (
    <Motion.div
      variants={variants}
      className="relative w-[180px] h-[140px] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          padding: "2px",
          background:
            "conic-gradient(from var(--angle), #FF9A00, #000000, #0821E0, #FF9A00)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          animation: "spinGradient 4s linear infinite",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <Icon className="w-8 h-8 text-[#FF9A00] mb-2" />
        <p className="font-semibold text-white text-sm">{text}</p>
      </div>
    </Motion.div>
  );
};

export default function Existance() {
  const cards = [
    { text: "Leadership Programs", icon: Crown },
    { text: "CEO Roundtables", icon: Users },
    { text: "Women & Youth Empowerment", icon: HeartHandshake },
    { text: "Startup Mentorship", icon: Rocket },
    { text: "Global Networking", icon: Globe },
    { text: "Knowledge Exchange", icon: BookOpen },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-4"
        >
          Why We Exist
        </Motion.h1>

        <Motion.p
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto text-gray-300 mb-12 px-4"
        >
          Afghanistan has talent, but limited access to global networks and
          mentorship.
        </Motion.p>

        <Motion.div
          className="flex flex-wrap justify-center gap-4 px-4"
          variants={containerVariants}
        >
          {cards.map((item, i) => (
            <MotionCard
              key={i}
              icon={item.icon}
              text={item.text}
              variants={itemVariants}
            />
          ))}
        </Motion.div>
      </Motion.div>

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
        `}
      </style>
    </div>
  );
}
