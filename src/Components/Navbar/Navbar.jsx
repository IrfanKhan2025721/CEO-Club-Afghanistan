import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navbardata from "./navdata";
import Checkbox from "./Checkbox";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="pt-20">
      <nav
        className={`fixed top-4 w-full z-50 transition-all duration-500 ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Container */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl px-4 md:px-8 h-16 md:h-20 flex items-center relative overflow-hidden">
            {/* Logo */}
            <div className="flex items-center justify-start basis-1/4 shrink-0">
              <NavLink to="/">
                <img
                  src="/LOGO.png"
                  alt="Logo"
                  className="h-10 md:h-20 lg:h-24 w-auto object-contain"
                />
              </NavLink>
            </div>

            {/* Navigation Links - Hidden on Mobile, Flex on Tablet/Desktop */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex gap-4 lg:gap-10">
                {navbardata.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative pb-1 transition-all text-sm lg:text-lg whitespace-nowrap
                       after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                       after:h-[2px] after:w-full after:bg-[#BB7D1E]
                       after:scale-x-0 after:origin-left
                       after:transition-transform after:duration-300
                       hover:after:scale-x-100
                       ${isActive ? "text-[#BB7D1E] after:scale-x-100" : "text-white hover:text-[#BB7D1E]"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Hidden on small mobile, flex on desktop/tablet */}
            <div className="hidden sm:flex items-center justify-end basis-1/4 shrink-0 gap-2 lg:gap-3">
              <NavLink
                to="/contact"
                className="text-white px-2 lg:px-4 py-1 text-sm lg:text-lg rounded-full border border-transparent hover:border-[#BB7D1D] transition whitespace-nowrap"
              >
                Contact
              </NavLink>

              <NavLink
                to="/join-club"
                className="bg-[#BB7D1D] text-sm lg:text-lg text-white rounded-full px-3 lg:px-5 py-1.5 border border-[#BB7D1D] hover:bg-black hover:text-[#BB7D1D] transition font-semibold whitespace-nowrap"
              >
                Join Club
              </NavLink>
            </div>

            {/* Mobile/Tablet Menu Button - Visible when links are hidden */}
            <div className="md:hidden ml-auto flex items-center">
              <Checkbox menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden mt-4 mx-4 bg-gray-800/95 backdrop-blur-lg border border-[#BB7D1D]/40 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-5 px-8 py-8 text-center">
                {navbardata.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xl font-medium ${isActive ? "text-[#BB7D1D]" : "text-white"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-3 mt-4 sm:hidden">
                  <NavLink
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="border border-[#BB7D1D] text-[#BB7D1D] py-3 rounded-full"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/join-club"
                    onClick={() => setMenuOpen(false)}
                    className="bg-[#BB7D1D] text-black py-3 rounded-full font-bold"
                  >
                    Join Club
                  </NavLink>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
