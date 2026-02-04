// Navbar.jsx - Updated version
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navbardata from "./navdata";
import Checkbox from "./Checkbox";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scroll down → hide
      } else {
        setShowNavbar(true); // scroll up → show
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* This is the actual navbar */}
      <nav
        className={`fixed top-0 w-full bg-gray-800/70 backdrop-blur-sm z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img
                src="/LOGO.png"
                alt="Logo"
                className="h-10 md:h-28 w-auto object-contain"
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
                      `relative pb-1 transition-all text-lg
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
                <NavLink
                  to="/contact"
                  className="text-white px-4 py-1 text-lg rounded-full border border-transparent hover:border-[#BB7D1D] transition"
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/join-club"
                  className="bg-[#BB7D1D] text-lg text-black rounded-full px-4 py-1 border border-[#BB7D1D] hover:bg-black hover:text-[#BB7D1D] transition"
                >
                  Join Club
                </NavLink>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Checkbox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-[#BB7D1D]/40">
            <div className="flex flex-col gap-5 px-6 py-6">
              {navbardata.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `relative text-lg pb-1 transition-all
                     after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                     after:h-[2px] after:w-full after:bg-[#BB7D1D]
                     after:scale-x-0 after:origin-left
                     after:transition-transform after:duration-300
                     hover:after:scale-x-100
                     ${
                       isActive
                         ? "text-[#BB7D1D] after:scale-x-100"
                         : "text-white hover:text-[#BB7D1D]"
                     }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="border border-[#BB7D1D] text-[#BB7D1D] py-2 rounded-full text-center hover:bg-[#BB7D1D] hover:text-black transition"
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/join-club"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#BB7D1D] text-black py-2 rounded-full text-center hover:bg-black hover:text-[#BB7D1D] hover:border hover:border-[#BB7D1D] transition"
                >
                  Join Club
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ADD THIS SPACER DIV - It creates space for all components */}
      <div className="h-20"></div>
    </>
  );
}
