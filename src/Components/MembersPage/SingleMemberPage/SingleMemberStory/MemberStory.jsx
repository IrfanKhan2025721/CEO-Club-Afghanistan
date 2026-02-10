import React from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import AnimatedIconButton from "./AnimatedIconButton";
import { memberData } from "../memberData";

export default function MemberStory() {
  
  const member = memberData[0];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Story Section */}
        <div className="w-full md:max-w-2xl border-l-4 border-[rgba(204,136,33,1)] pl-6 md:pl-10">
          <span className="text-[rgba(204,136,33,1)] font-bold uppercase tracking-widest text-2xl mb-2 block">
            Our Story
          </span>

          <p className="text-gray-300 leading-relaxed text-lg ">
            {member.story || member.quote || "No story available."}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-row md:flex-col gap-6 items-center mt-6 md:mt-0">
          {member.fblink && (
            <div className="w-[150px] flex justify-end">
              <AnimatedIconButton
                icon={FaSquareFacebook}
                text="Facebook"
                href={member.fblink}
                bg="#1877F2"
              />
            </div>
          )}

          {member.lilink && (
            <div className="w-[150px] flex justify-end">
              <AnimatedIconButton
                icon={FaLinkedin}
                text="LinkedIn"
                href={member.lilink}
                bg="#0A66C2"
              />
            </div>
          )}

          {member.xlink && (
            <div className="w-[150px] flex justify-end">
              <AnimatedIconButton
                icon={FaSquareXTwitter}
                text="Twitter"
                href={member.xlink}
                bg="#000000"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
