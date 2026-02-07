import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { aboutLinks, communityLinks, programsLinks } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-black px-4 sm:px-8 md:px-16 pt-[3rem] md:pt-[4rem]">
      <div className="relative flex flex-col items-center sm:flex-row sm:justify-between gap-[3rem] pb-[2rem] sm:pb-[3rem]">
        {/* logo */}
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/LOGO2.png"
            alt="LOGO"
            className="w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem]"
          />

          {/* socials */}
          <div className="flex gap-[0.5rem] mt-2">
            <a
              href="https://www.linkedin.com/company/ceo-club-afghanistan/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CC8821] transition text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CC8821] transition text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CC8821] transition text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#CC8821] transition text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem]"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* links */}
        <div className="flex justify-between items-start w-full sm:w-auto gap-[6rem] flex-wrap">
          {/* about_links */}
          <div>
            {aboutLinks.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-white font-bold text-[0.9rem] sm:text-[1rem] md:text-[1.5rem]">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-3 mt-3">
                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_1}
                    </a>
                  </li>

                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_2}
                    </a>
                  </li>

                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_3}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* community_links */}
          <div>
            {communityLinks.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-white font-bold text-[0.9rem] sm:text-[1rem] md:text-[1.5rem]">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-3 mt-3">
                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_1}
                    </a>
                  </li>

                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_2}
                    </a>
                  </li>

                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_3}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* programs_links */}
          <div>
            {programsLinks.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-white font-bold text-[0.9rem] sm:text-[1rem] md:text-[1.5rem]">
                  {section.title}
                </h3>

                <ul className="flex flex-col gap-3 mt-3">
                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_1}
                    </a>
                  </li>

                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_2}
                    </a>
                  </li>

                  <li className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]">
                    <a
                      href="#"
                      className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                    >
                      {section.link_3}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom line */}
        <span
          className="absolute bottom-0 left-0 w-full h-[1px]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_8%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.8)_100%)]"
        ></span>
      </div>

      <p className="text-gray-600 text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem] text-center mt-[1rem] pb-4">
        CEO Club Afghanistan is an independent, non-political organization.
      </p>
    </footer>
  );
}
