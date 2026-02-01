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
    <div className="relative w-[180px] h-[140px] flex items-center justify-center">
      {/* 
          1. The Border Layer 
          - No 'rotate' transform used. 
          - Animate the --angle variable instead.
      */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          padding: "2px", // Border thickness
          background:
            "conic-gradient(from var(--angle), #FF9A00, #000000, #0821E0, #FF9A00)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          animation: "spinGradient 4s linear infinite",
        }}
      />

      {/* 2. Content Layer (Hollow/Transparent background) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <Icon className="w-8 h-8 text-[#FF9A00] mb-2" />
        <p className="font-semibold text-white text-sm">{text}</p>
      </div>

      {/* 
          3. CSS for Custom Property Animation 
          This @property block is essential for the browser to understand 
          how to transition an 'angle' value.
      */}
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
    <div
      className="py-16 text-white"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
