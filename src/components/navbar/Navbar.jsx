import React from "react";
import Logo from "../Logo";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-rainbow">
      <div className="max-w-5xl mx-auto px-4 justify-items-center">
        <div className="flex items-center font-mono h-16">
          {/* Logo section */}
          <div className="absolute left-10 flex items-center h-16">
            <Logo />
          </div>

          {/* Shortcut */}
          <div className="flex md:flex justify-items-center space-x-10 px-10 h-12 bg-white rounded-full">
            <div className="hidden md:flex items-center space-x-12 text-sm">
              <a
                href="#home"
                className="hover:text-xl hover:text-gray-800 transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-xl hover:text-gray-800 transition-all"
              >
                About me
              </a>
              <a
                href="#projects"
                className="hover:text-xl hover:text-gray-800 transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-xl hover:text-gray-800 transition-all"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
