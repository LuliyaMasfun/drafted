import React, { useState } from "react";
import BgSwirlVideo from "./bgSwirlVideo";
import UsU from "../public/images/UsU.png";
import SectionTitle from "./SectionTitle";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to the server
    console.log(formData);
  };

  return (
    <section id="contact" className="max-w-containerSmall lgl:py-32">
      <div className="w-[100%]">
        <SectionTitle
          title={"NEED HELP OR JUST WANT 2 SAY HI?\n DONT BE SHY."}
        />
      </div>
      <div className="grid grid-cols-12">
        <aside className="col-span-6 flex items-center justify-center">
          <img className="w-full" src="/images/UsU.png" alt="UsU" />
        </aside>

        <form
          onSubmit={handleSubmit}
          className="col-span-4 p-6 mt-12 max-w-xl mx-auto"
        >
          <div className="flex justify-between mb-11">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-500"
              required
            />
          </div>
          <div className="flex justify-between mb-11">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-500"
            />
          </div>
          <div className="flex justify-between mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-500"
              required
            />
          </div>

          <div className="flex justify-between mb-11">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-500"
              rows={2}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mb-12 bg-purple-800 hover:bg-gray-800 transition duration-300 ease-in-out text-white font-titleFont py-4 px-8 rounded-2 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
