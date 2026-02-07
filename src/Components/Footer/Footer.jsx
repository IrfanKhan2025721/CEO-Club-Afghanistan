import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { aboutLinks, communityLinks, programsLinks } from "./footerData";

// Keep your main logo
import CEOLOGO from "../../assets/ContacImages/LOGO2.png";

export default function Footer() {
  return (
    <footer className="bg-black px-4 sm:px-8 md:px-16 pt-[3rem] md:pt-[4rem]">
      <div className="relative flex flex-col items-center sm:flex-row sm:justify-between gap-[3rem] 2xl:justify-evenly pb-[2rem] sm:pb-[3rem]">
        {/* logos */}
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src={CEOLOGO}
            alt="CEO Logo"
            className="w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem]"
          />

          {/* socials */}
          <div className="flex gap-3 mt-2 text-white">
            <a
              href="https://www.linkedin.com/company/ceo-club-afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC8821] transition-colors duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/ceo-club-afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC8821] transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/ceo-club-afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC8821] transition-colors duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/ceo-club-afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC8821] transition-colors duration-300"
            >
              <FaTwitter size={24} />
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
                  {[section.link_1, section.link_2, section.link_3].map(
                    (link, idx) => (
                      <li
                        key={idx}
                        className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]"
                      >
                        <a
                          href="#"
                          className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ),
                  )}
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
                  {[section.link_1, section.link_2, section.link_3].map(
                    (link, idx) => (
                      <li
                        key={idx}
                        className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]"
                      >
                        <a
                          href="#"
                          className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ),
                  )}
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
                  {[section.link_1, section.link_2, section.link_3].map(
                    (link, idx) => (
                      <li
                        key={idx}
                        className="text-[rgba(153,153,153,1)] text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem]"
                      >
                        <a
                          href="#"
                          className="inline-block hover:underline underline-offset-8 decoration-[#CC8821] decoration-2 hover:text-white transition-all duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom line */}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_8%,rgba(204,136,33,1)_47%,rgba(0,0,0,0.8)_100%)]"></span>
      </div>

      <p className="text-gray-600 text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem] text-center mt-[1rem] pb-4">
        CEO Club Afghanistan is an independent, non-political organization.
      </p>
    </footer>
  );
}
