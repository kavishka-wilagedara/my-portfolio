import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile-img.jpg";
import handIcon from "../assets/hand-icon.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linePosition = 50 + scrollProgress * 40;

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 bg-rainbow font-mono overflow-hidden"
    >
      {/* ANIMATED CURVED LINE */}
      <div
        id="rainbow-line"
        className="absolute left-0 right-100 w-full h-22 pointer-events-none transition-all duration-700 ease-out"
        style={{
          top: `${linePosition}vh`,
          opacity: 1 - scrollProgress * 0.1, // Fades when moves
          transform: `scale(${2.8 + scrollProgress * 0.2})`,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(253, 186, 116)" />
              <stop offset="25%" stopColor="rgb(244, 114, 182)" />
              <stop offset="50%" stopColor="rgb(196, 181, 253)" />
              <stop offset="75%" stopColor="rgb(96, 165, 250)" />
              <stop offset="100%" stopColor="rgb(103, 232, 249)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main curved line */}
          <path
            d="M 5 95 Q 50 20, 95 95"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              strokeDasharray: "1000",
              strokeDashoffset: 1000 - scrollProgress * 800,
              transition: "stroke-dashoffset 0.3s ease-out",
            }}
          />
        </svg>
      </div>

      {/* HOMEPAGE CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-44 sm:w-56 lg:w-64 h-44 sm:h-56 lg:h-64 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src={profileImg}
              alt="profile"
              className="w-full h-full object-cover scale-180"
            />
          </div>
        </div>

        {/* Name */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <h1 className="text-xl md:text-3xl font-extrabold">
            Hi! I'm Kavishka Wilagedara
          </h1>
          <img src={handIcon} alt="wave" className="w-6 h-6" />
        </div>

        {/* Role */}
        <div className="mt-2 flex justify-center">
          <h1
            className="text-3xl sm:text-5xl leading-tight font-bold typewriter-text 
               bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Full-Stack Developer
          </h1>
        </div>

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
      </div>
    </section>
  );
};

export default Home;
