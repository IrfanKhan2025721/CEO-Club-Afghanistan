import React from "react";
import { leaders } from "./InspiringLeadersData";

export default function InspiringLeaders() {
  return (
    <section className="bg-black flex flex-col items-center justify-center pt-[3rem] md:pt-[4rem]">
      {/* header */}
      <div className="text-center">
        <h2 className="text-[rgba(255,255,255,1)] font-bold text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem]">
          Inspiring Afghan Leaders
        </h2>
        <h3 className="text-[rgba(153,153,153,1)] font-bold text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem]">
          Featured Members
        </h3>
      </div>
      {/* leaders */}
      <div className="mt-[2rem] px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
        {/* leader */}
        {leaders.map((leader) => {
          return (
            <div
              key={leader.id}
              className="bg-[rgba(34,34,34,1)] rounded-[10px] flex flex-col items-center gap-4 p-[0.6rem]"
            >
              <img
                src={leader.img}
                alt=""
                className="rounded-[10px] w-full h-auto"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[rgba(255,255,255,1)] font-bold">
                  {leader.name}
                </h4>
                <p className="text-[rgba(153,153,153,1)] font-bold w-[80%] md:w-[70%]">
                  {leader.text}
                </p>
              </div>
              {/* profile_link */}
              <div className="flex justify-between items-center w-full">
                <a href="#" className="text-[rgba(204,136,33,1)] font-bold">
                  View Profile
                </a>
                <img src={leader.companyLogo} alt="" className="w-[2.8rem]" />
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-[2rem] md:mt-[3rem] lg:mt-[4rem] bg-gradient-to-r from-black to-[#D28B1D] hover:from-gray-900 hover:to-yellow-400 transition rounded-full py-2 px-6 text-sm sm:text-base text-white">
        View All Members
      </button>
    </section>
  );
}
