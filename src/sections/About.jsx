import React from "react";
import profileImg from "../assets/profile-img.jpg";
import oracleImg from "../assets/oracle.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-20 bg-rainbow font-mono"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-800 text-center mt-10">
          About Me
        </h2>

        {/* Profile and Description */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-5">
          {/* Profile Image */}
          <div className="lg:w-1/6 w-3/4 sm:w-1/2 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-3xl scale-255 transition-transform duration-700"
            />
          </div>

          {/* About Text */}
          <div className="lg:w-3/4 text-center lg:text-left space-y-6">
            <p className="text-gray-700 lg:text-2xl sm:text-lg leading-relaxed sm:text-justify">
              Passionate software developer who loves building clean, efficient,
              and scalable applications. I enjoy turning ideas into real-world
              solutions and exploring modern technologies to create meaningful
              digital experiences. My focus is on writing maintainable code,
              optimizing performance, and delivering smooth user experiences
              across every project.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 sm:mb-16">
          <div className="max-w-5xl mx-auto space-y-8 mt-10">
            {/* Languages & Frameworks */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#ca29f2] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-linear-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Languages & Frameworks
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Java",
                  "Spring Boot",
                  "React",
                  "Python",
                  "JavaScript",
                  "C#",
                  "Node",
                  "Flask",
                  "Bootstrap",
                  "Tailwind CSS",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r from-purple-100 to-pink-100 rounded-full text-purple-800 text-xs sm:text-sm lg:text-base font-semibold hover:from-purple-200 hover:to-pink-200 hover:scale-110 transition-all duration-200 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1bb523] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-linear-to-br from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Databases
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["MySQL", "MongoDB", "PostgreSQL", "Redis"].map(
                  (db, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r from-green-100 to-emerald-100 rounded-full text-green-800 text-xs sm:text-sm lg:text-base font-semibold hover:from-green-200 hover:to-emerald-200 hover:scale-110 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {db}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#144d9c] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-linear-to-br from-blue-700 to-blue-700 bg-clip-text text-transparent">
                  Tools
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Docker", "Linux", "Git", "VS Code", "Postman"].map(
                  (tool, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r from-blue-100 to-cyan-100 rounded-full text-blue-800 text-xs sm:text-sm lg:text-base font-semibold hover:from-blue-200 hover:to-cyan-200 hover:scale-110 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Work Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-gray-700">
          {/* Education */}
          <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-rainbow backdrop-blur-sm border border-indigo-100 shadow-md transition-all duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-start">
                Education
              </h3>
              <div className="group hover:-translate-y-0.5 hover:shadow-lg transition-transform duration-300">
                <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-white border-b-3 border-r-3 border-transparent group-hover:border-black transition-all duration-300">
                  <h3 className="text-gray-800 text-base sm:text-lg font-bold mb-1">
                    Bachelor of Science
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Department of Statistics and Computer Science
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base font-extrabold">
                    University of Kelaniya
                  </p>
                  <p className="text-blue-600 font-semibold text-xs sm:text-sm mt-2 mb-3">
                    2022 - 2025
                  </p>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-start mt-5">
                Certificates
              </h3>

              <div className="group hover:-translate-y-0.5 hover:shadow-lg transition-transform duration-300">
                <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-white border-b-3 border-r-3 border-transparent group-hover:border-black">
                  <p className="text-gray-800 text-base sm:text-lg font-bold mb-2 flex items-center">
                    <img
                      src={oracleImg}
                      alt="Oracle Logo"
                      className="w-6 h-6 rounded-full sm:w-8 sm:h-8 mr-3 shrink-0"
                    />
                    <span className="text-start">
                      MySQL Implementation Certified Associate
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-5 text-center">
                <a
                  href="https://www.linkedin.com/in/kavishka-wilagedara-10779b344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-2 text-white rounded-4xl bg-black hover:bg-gray-900 transition-colors duration-300 "
                >
                  see more
                  <IoIosArrowRoundForward size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-rainbow backdrop-blur-sm border border-indigo-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-start">
                Work Experience
              </h3>{" "}
              <div className="absolute inset-0 rounded-xl"></div>
              <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-rainbow border-b-3 border-r-3 border-transparent group-hover:border-black">
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                  Software Engineer Intern
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  jWare Automation (Pvt) Ltd
                </p>
                <p className="text-blue-600 font-semibold text-xs sm:text-sm mt-2 mb-3">
                  Mar 2025 - Sep 2025
                </p>

                <ul className="space-y-2 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 shrink-0">
                      •
                    </span>
                    <span>
                      Built and maintained backend services with Python (Flask)
                      and Node.js
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 shrink-0">
                      •
                    </span>
                    <span>
                      Developed React.js components and integrated REST APIs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 shrink-0">
                      •
                    </span>
                    <span>
                      Implemented RESTful APIs with JWT and OAuth 2.0
                      authentication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 shrink-0">
                      •
                    </span>
                    <span>
                      Optimized MySQL queries and integrated Redis caching
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5 shrink-0">
                      •
                    </span>
                    <span>
                      Collaborated in Agile sprints with code reviews and
                      feature delivery
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
