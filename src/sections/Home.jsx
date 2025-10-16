import React from "react";
import profileImg from "../assets/profile-img.jpg";
import handIcon from "../assets/hand-icon.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* Profile Image */}
      <div className="mt-5 relative">
        <div className="w-44 sm:w-56 lg:w-64 h-44 sm:h-56 lg:h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-500">
          <img
            src={profileImg}
            alt="profile"
            className="w-full h-full object-cover scale-180"
          />
        </div>
      </div>

      {/* Name */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <h3 className="text-xl md:text-2xl">Hi! I'm Kavishka Wilagedara</h3>
        <img src={handIcon} alt="wave" className="w-6 h-6" />
      </div>
      {/* Role */}
      <h1 className="text-3xl sm:text-5xl leading-tight mt-2">
        Junior Full-Stack Developer
      </h1>
      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base mt-2 max-w-lg">
        I build clean, efficient, and scalable applications, exploring modern
        technologies along the way.
      </p>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5">
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition-all"
        >
          <span>Contact Me</span>
          <IoIosArrowRoundForward size={24} />
        </a>

        <a
          href="/Kavishka-Wilagedara-Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 hover:bg-gray-100 transition-all"
        >
          <span>My Resume</span>
          <MdOutlineFileDownload size={24} />
        </a>
      </div>
    </section>
  );
};

export default Home;
