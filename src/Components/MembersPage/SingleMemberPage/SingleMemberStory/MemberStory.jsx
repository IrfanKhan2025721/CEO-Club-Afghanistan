import React from "react";
import { FaSquareFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import AnimatedIconButton from "./AnimatedIconButton";

export default function MemberStory() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className="w-full md:max-w-2xl border-l-4 border-[rgba(204,136,33,1)] pl-6 md:pl-10">
          <span className="text-[rgba(204,136,33,1)] font-semibold uppercase tracking-widest text-sm mb-2 block">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Message from the Founder
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg ">
            CEO Club Afghanistan was born from a simple but powerful idea: Afghanistan needs strong, ethical, and globally connected leaders. 
            Over the years, I have witnessed immense talent across our country—young entrepreneurs, determined women, visionary CEOs—yet many lack access to mentorship, global exposure, and trusted professional networks.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mt-4">
            CEO Club Afghanistan exists to bridge that gap. Our mission is to create a platform where Afghan leaders can learn, collaborate, and grow together while staying rooted in integrity, inclusivity, and national responsibility.
          </p>
        </div>
        <div className="flex flex-row md:flex-col gap-6 items-center mt-28">

          <div className="w-[150px] flex justify-end">
            <AnimatedIconButton
              icon={FaSquareFacebook}
              text="Facebook"
              href="https://facebook.com"
              bg="#1877F2"
            />
          </div>

          <div className="w-[150px] flex justify-end">
            <AnimatedIconButton
              icon={FaLinkedin}
              text="LinkedIn"
              href="https://linkedin.com"
              bg="#0A66C2"
            />
          </div>

          <div className="w-[150px] flex justify-end">
            <AnimatedIconButton
              icon={FaSquareXTwitter}
              text="Twitter"
              href="https://twitter.com"
              bg="#000000"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
