import React from "react";

export default function JoinLeaderShip() {
  return (
    <div className="flex justify-center items-center py-20 px-4">
      {/* 
          Main Container with the Animated Border.
          This div now holds the entire section's content.
      */}
      <div className="relative max-w-3xl w-full rounded-2xl overflow-hidden p-10 text-center">
        {/* The Animated Border Layer (applied to the whole div) */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            padding: "3px", // Thickness of the outer border
            background:
              "conic-gradient(from var(--angle), #FF9A00, #000000, #0821E0, #FF9A00)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            animation: "spinGradient 6s linear infinite",
          }}
        />

        {/* Content Inside the Border (Transparent Background) */}
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Join Afghanistan’s Leadership Movement
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Be part of a network shaping the future of Afghanistan business and
            innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {/* Standard <a> tags styled as buttons for 100% reliable linking */}
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
          </div>
        </div>

        {/* CSS for the rotating border logic */}
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

            /* Ensure smooth scrolling globally */
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </div>
    </div>
  );
}
