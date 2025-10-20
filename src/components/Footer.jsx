import React from "react";
import Logo from "./Logo";
import { TfiEmail } from "react-icons/tfi";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { SiMedium } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-rainbow">
      <div className="text-center">
        <Logo className="w-36 mx-auto" />
      </div>
      <div className="flex justify-center items-center gap-3 font-mono">
        <TfiEmail size={24} />
        kavishkamadumal890@gmail.com
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-10 py-12">
        <p>© 2025 Kavishka Wilagedara. All right reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/kavishka-wilagedara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kavishka-wilagedara-10779b344/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@kavishkamadumal890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMedium size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
