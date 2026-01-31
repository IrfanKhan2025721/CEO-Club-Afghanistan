import React from "react";

export default function AboutHero() {
  return (
    <div
      className="w-full flex items-center justify-center text-white"
      style={{
        // Using a high-quality team collaboration image
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "65vh",
      }}
    >
      <div className="text-center px-6 py-10 rounded-2xl">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase">
          Club Members
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-100 max-w-2xl mx-auto">
          Meet the visionary leaders shaping Afghanistan’s future.
        </p>
      </div>
    </div>
  );
}
