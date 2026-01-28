import React from "react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import navbardata from "./navdata";
import Checkbox from "./Checkbox";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navbar Container */}
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/public/LOGO.png"
              alt="Logo"
              className="h-16 sm:h-10 md:h-20 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center w-full">
            {/* Center Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
              {navbardata.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-1 transition-all
                     after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                     after:h-[2px] after:w-full after:bg-[#BB7D1E]
                     after:scale-x-0 after:origin-left
                     after:transition-transform after:duration-300
                     hover:after:scale-x-100
                     ${
                       isActive
                         ? "text-[#BB7D1E] after:scale-x-100"
                         : "text-white hover:text-[#BB7D1E]"
                     }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right Buttons */}
            <div className="ml-auto flex gap-3">
              <button className="text-white px-4 py-1 rounded-full border border-transparent hover:border-[#BB7D1E] transition">
                Contact
              </button>
              <button className="bg-[#BB7D1E] text-white rounded-full px-4 py-1 border border-[#BB7D1E] hover:bg-black hover:text-[#BB7D1E] transition">
                Join Club
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#BB7D1E]">
            <Checkbox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-[#BB7D1E]/40">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navbardata.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="relative text-white text-lg pb-1
                           after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                           after:h-[2px] after:w-full after:bg-[#BB7D1E]
                           after:scale-x-0 after:origin-left
                           after:transition-transform after:duration-300
                           hover:after:scale-x-100 hover:text-[#BB7D1E]"
              >
                {item.name}
              </NavLink>
            ))}

            <button className="border border-[#BB7D1E] text-[#BB7D1E] py-2 rounded-full">
              Contact
            </button>
            <button className="bg-[#BB7D1E] text-black py-2 rounded-full">
              Join Club
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
