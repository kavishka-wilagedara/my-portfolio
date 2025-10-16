import React, { useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleDarkMode = () => {};

  return (
    <nav className="fixed top-0 w-full z-40 bg-rainbow shadow-md">
      <div className="max-w-7xl mx-auto justify-items-center">
        <div className="flex items-center justify-between w-full px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 bg-white shadow-sm bg-opacity-50 px-10 py-4 rounded-full text-sm">
            <a href="#home" className="hover:text-gray-600">
              Home
            </a>
            <a href="#about" className="hover:text-gray-600">
              About me
            </a>
            <a href="#projects" className="hover:text-gray-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact me
            </a>
          </div>

          {/* Dark mode and contact section */}
          <div className="flex items-center gap-3 md:gap-6">
            <button
              onClick={handleDarkMode}
              className="p-2 rounded-full hover:bg-gray-600 transition-colors"
            >
              <MdOutlineDarkMode size={24} />
            </button>
            <div className="hidden md:block">
              <a
                href="#contact"
                className="flex items-center px-3 py-3 rounded-full border"
              >
                <div className="px-4">Contact</div>
                <MdArrowOutward size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
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
