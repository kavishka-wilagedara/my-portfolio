import React from "react";
import profileImg from "../assets/profile-img.jpg";
import handIcon from "../assets/hand-icon.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  const dashLength = 250;
  const dashGap = 50;

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 bg-rainbow font-mono overflow-hidden"
    >
      {/* ANIMATED CURVED SWEEP LINE */}
      {/* <div className="hidden sm:block absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs> */}
      {/* LIGHT MODE RAINBOW GRADIENT */}
      {/* <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(253, 186, 116)" />{" "}
              {/* Orange-300 */}
      {/* <stop offset="30%" stopColor="rgb(244, 114, 182)" /> {/* Pink-400 */}
      {/* <stop offset="50%" stopColor="rgb(196, 181, 253)" /> Violet-300 */}
      {/* <stop offset="70%" stopColor="rgb(96, 165, 250)" /> Blue-400 */}
      {/* <stop offset="100%" stopColor="rgb(103, 232, 249)" /> Cyan-300  */}
      {/* </linearGradient> */}
      {/* Glow filter */}
      {/* <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs> */}
      {/* Invisible Guide Path */}
      {/* <path
            d="M 10 95 Q 50 10, 90 95"
            fill="none"
            stroke="transparent"
            strokeWidth="2"
          /> */}
      {/* Visible Sweeping Line */}
      {/* <path
            d="M 10 95 Q 50 10, 90 95"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
            opacity="0.95"
            style={{ strokeDasharray: `${dashLength} ${dashGap}` }}
            className="animate-stroke-sweep"
          />
        </svg>
      </div> */}
      {/* HOMEPAGE CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-25 pb-20">
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
