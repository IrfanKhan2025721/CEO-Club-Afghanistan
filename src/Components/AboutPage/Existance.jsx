import React from "react";
import {
  Crown,
  Users,
  HeartHandshake,
  Rocket,
  Globe,
  BookOpen,
} from "lucide-react";

const Card = ({ icon: Icon, text }) => {
  return (
    <div className="relative w-[180px] h-[140px] rounded-xl p-[2px] overflow-hidden">
      {/* Moving gradient border */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "conic-gradient(#FF9A00, #000000, #0821E0, #FF9A00)",
          backgroundSize: "300% 300%",
          animation: "gradientMove 6s linear infinite",
        }}
      />

      {/* Card content */}
      <div className="relative z-10 h-full w-full rounded-xl bg-black flex flex-col items-center justify-center text-center p-2">
        <Icon className="w-8 h-8 text-[#FF9A00] mb-2" />
        <p className="font-semibold text-white text-sm">{text}</p>
      </div>

      {/* Inline keyframes for moving gradient */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
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

  return (
    <div className="py-16 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Why We Exist</h1>

      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
        Afghanistan has talent, but limited access to global networks and
        mentorship.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((item, i) => (
          <Card key={i} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
