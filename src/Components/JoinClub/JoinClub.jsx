import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function JoinClub() {
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    emailjs
      .send("service_o2umylc", "template_w63qsaf", data, "ZCLfxXA4Dl1DTQRYo")
      .then(
        () => {
          setSuccess(true);
          form.reset();
          setType("");
        },
        (error) => {
          console.error(error);
        },
      );
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl outline-none focus:border-[#CC8821] focus:ring-1 focus:ring-[#CC8821] text-white placeholder-gray-400";

  const sectionTitle = "font-semibold mb-3 text-[#CC8821]";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">
        <h1 className="text-3xl font-bold text-center text-[#CC8821] mb-2">
          CEO Club AFG
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Membership Application Form
        </p>

        {success && (
          <div className="mb-6 flex items-center gap-3 bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-xl">
            <span className="text-xl">✅</span>
            <span>Form submitted successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              name="full_name"
              className={inputClass}
              required
              placeholder="Full Name"
            />
            <input
              name="email"
              className={inputClass}
              type="email"
              required
              placeholder="Email Address"
            />
            <input
              name="phone"
              className={inputClass}
              required
              placeholder="Phone / WhatsApp"
            />
            <input
              name="location"
              className={inputClass}
              required
              placeholder="City / Country"
            />
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-2 text-gray-200">
              Apply As
            </label>
            <div className="flex gap-6 flex-wrap text-gray-300">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="apply_type"
                  required
                  onChange={() => setType("company")}
                  className="text-[#CC8821] focus:ring-[#CC8821] bg-gray-800 border-gray-700"
                />
                Company / Business
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="apply_type"
                  onChange={() => setType("employee")}
                  className="text-[#CC8821] focus:ring-[#CC8821] bg-gray-800 border-gray-700"
                />
                Employee / Professional
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="apply_type"
                  onChange={() => setType("member")}
                  className="text-[#CC8821] focus:ring-[#CC8821] bg-gray-800 border-gray-700"
                />
                Individual Member
              </label>
            </div>
          </div>

          {type === "company" && (
            <div className="mb-6">
              <h2 className={sectionTitle}>Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="company_name"
                  className={inputClass}
                  required
                  placeholder="Company Name"
                />
                <select name="industry" className={inputClass} required>
                  <option value="">Select Industry</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Construction</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
                <input
                  name="website"
                  className={inputClass}
                  required
                  placeholder="Company Website"
                />
                <select name="position" className={inputClass} required>
                  <option value="">Your Position</option>
                  <option>CEO</option>
                  <option>Founder</option>
                  <option>Managing Director</option>
                  <option>Other</option>
                </select>
                <select name="company_size" className={inputClass} required>
                  <option value="">Company Size</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–100</option>
                  <option>100+</option>
                </select>
                <input
                  name="established"
                  type="date"
                  className={inputClass}
                  required
                />
              </div>
            </div>
          )}

          {type === "employee" && (
            <div className="mb-6">
              <h2 className={sectionTitle}>Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="job_title" className={inputClass} required>
                  <option value="">Job Title</option>
                  <option>Manager</option>
                  <option>Engineer</option>
                  <option>Consultant</option>
                  <option>Other</option>
                </select>
                <input
                  name="company"
                  className={inputClass}
                  required
                  placeholder="Company Name"
                />
                <select name="experience" className={inputClass} required>
                  <option value="">Experience</option>
                  <option>0–1 Years</option>
                  <option>2–5 Years</option>
                  <option>6–10 Years</option>
                  <option>10+ Years</option>
                </select>
                <select name="skills" className={inputClass} required>
                  <option value="">Skills</option>
                  <option>Leadership</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Other</option>
                </select>
                <input
                  name="linkedin"
                  className={inputClass + " md:col-span-2"}
                  required
                  placeholder="LinkedIn Profile"
                />
              </div>
            </div>
          )}

          {type === "member" && (
            <div className="mb-6">
              <h2 className={sectionTitle}>Member Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="education" className={inputClass} required>
                  <option value="">Education Level</option>
                  <option>High School</option>
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>Other</option>
                </select>
                <select name="interest" className={inputClass} required>
                  <option value="">Field of Interest</option>
                  <option>Business</option>
                  <option>Technology</option>
                  <option>Leadership</option>
                  <option>Other</option>
                </select>
                <select
                  name="status"
                  className={inputClass + " md:col-span-2"}
                  required
                >
                  <option value="">Current Status</option>
                  <option>Student</option>
                  <option>Freelancer</option>
                  <option>Employed</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          <div className="mb-6">
            <textarea
              name="message"
              className={inputClass + " h-28"}
              required
              placeholder="Why do you want to join?"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                required
                className="text-[#CC8821] focus:ring-[#CC8821] bg-gray-800 border-gray-700 rounded"
              />
              I confirm the information is correct
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#CC8821] text-white py-3 rounded-xl font-semibold hover:bg-[#b8781e] transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
