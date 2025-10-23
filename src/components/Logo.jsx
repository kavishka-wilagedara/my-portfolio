import React from "react";
import logo from "../assets/logo.jpg";

function Logo() {
  return (
    <div>
      <a href="#home" className="relative inline-flex items-center">
        <span className="bg-linear-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Kavishka
        </span>
        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 rounded-full mx-1 relative z-10"
        />
        <span className="relative -ml-5 z-20 bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          ilagedara
        </span>
      </a>
    </div>
  );
}

export default Logo;
