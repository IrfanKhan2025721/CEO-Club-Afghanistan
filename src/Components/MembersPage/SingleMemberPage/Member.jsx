import React from "react";
import { useParams } from "react-router-dom";
import { memberData } from "./memberData";
import MemberStory from "./SingleMemberStory/MemberStory";

export default function Member() {
  const { id } = useParams();

  const member = memberData.find((m) => m.id === Number(id));

  if (!member)
    return <p className="text-white text-center mt-20">Member not found</p>;

  return (
    <main className="my-[3rem] px-4 sm:px-8 md:px-16 bg-black py-[4rem]">
      <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-16">
        <div className="w-full sm:w-[50%]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full rounded-lg h-[26rem] object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 sm:w-[50%]">
          <h2 className="text-white font-bold text-[2.5rem]">
            {member.name}{" "}
            <span className="text-[#CC8821]">{member.lastName}</span>
          </h2>
          <p className="text-gray-300 text-xl">{member.role}</p>

          <ul className="text-gray-400 list-disc ml-5">
            {member.organizations.map((org, index) => (
              <li key={index}>{org}</li>
            ))}
          </ul>

          <blockquote className="text-gray-400 italic mt-6">
            “{member.quote}”
          </blockquote>
        </div>
      </div>

      <MemberStory />
    </main>
  );
}
