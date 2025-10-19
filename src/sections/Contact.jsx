import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-20 bg-rainbow font-mono"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-800 text-center mt-7">
          Get In Touch
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5">
          I’d love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>

        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          ></textarea>
          <button
            type="submit"
            className="mt-5 py-3 px-7 w-max mx-auto flex items-center justify-between gap-3 text-white rounded-full bg-gray-700 hover:bg-black"
          >
            Submit now
            <IoIosArrowRoundForward size={24} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
