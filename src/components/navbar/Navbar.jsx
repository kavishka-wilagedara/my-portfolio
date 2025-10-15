import React, { useState } from "react";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-rainbow shadow-md">
      <div className="max-w-5xl mx-auto px-4 justify-items-center">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute left-0 flex items-center h-16">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 bg-white px-10 py-4 rounded-full text-sm">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <IoCloseOutline size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-1">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About me
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
