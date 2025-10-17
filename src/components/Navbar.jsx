import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdArrowOutward } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode class to <html> or <body>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? "bg-gray-900 shadow-lg" : "bg-white shadow-md"
      } ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className={`transition-transform duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm">
          {["Home", "About", "Projects", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`hover:text-gray-500 transition-colors duration-300 ${
                darkMode ? "text-gray-200 hover:text-white" : "text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Dark mode & Contact button */}
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={handleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <MdOutlineDarkMode
              size={24}
              className={darkMode ? "text-yellow-300" : "text-gray-700"}
            />
          </button>
          <div className="hidden md:block">
            <a
              href="#contact"
              className={`flex items-center px-3 py-3 rounded-full border transition-colors ${
                darkMode
                  ? "border-gray-600 text-gray-200 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
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
            className={`focus:outline-none ${
              darkMode
                ? "text-gray-200 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-4 space-y-1 shadow-md transition-colors ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          {["Home", "About", "Projects", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                darkMode
                  ? "text-gray-200 hover:text-white hover:bg-gray-800"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
