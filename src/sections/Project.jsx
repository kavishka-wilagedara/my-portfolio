import React, { useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {
  const [projects] = useState([
    {
      name: "Club Master",
      type: "Backend - Individual Project",
      techStack: "Java, Spring Boot, MongoDB",
      infor:
        "ClubMaster is a web-based club management system using Spring Boot, React, and MongoDB. It enables admins and members to manage clubs, events, memberships, with role-based access, CRUD operations, and image handling.",
      github: "https://github.com/kavishka-wilagedara/club-master-backend",
    },
    {
      name: "Health Care",
      type: "Frontend - Group Project",
      techStack: "MERN Stack",
      infor:
        "Developed a MERN stack healthcare project featuring a dynamic patient dashboard, seamlessly integrating React frontend with backend APIs to provide real-time, personalized health data updates for users.",
      github: "https://github.com/kavishka-wilagedara/healthcare-system",
    },
    {
      name: "Inventory Management",
      type: "Backend - Group Project",
      techStack: "Java, Spring Boot, MySQL",
      infor:
        "Developed a Spring Boot and MySQL-based Inventory Management System with REST APIs, including product CRUD operations, expiry notifications, and feedback services for system improvement.",
      github: "https://github.com/chamuda-arangalla/Inventory-Management",
    },
    {
      name: "Patient Management",
      type: "Backend - Individual Project",
      techStack: "Java, Spring Boot, PostgreSQL",
      infor:
        "Patient Management System is microservices project, featuring secure JWT authentication, RESTful APIs for patients, appointments, and billing, with comprehensive unit and integration testing.",
      github:
        "https://github.com/kavishka-wilagedara/patient-management-microservices",
    },
    {
      name: "Learn Vault",
      type: "Backend - Group Project",
      techStack: "Java, Spring Boot, MongoDB",
      infor:
        "Developed a Spring Boot and MongoDB-based Learn Vault API with OAuth authentication, user profile management, and follow system for secure and interactive user engagement.",
      github: "https://github.com/AnjanaTharanga24/learn-vault-api",
    },
    {
      name: "Task Mate",
      type: "Individual Project",
      techStack: "C#, Windows Forms, SQL Server",
      infor:
        "Developed a C# Windows Forms Task Management System with SQL Server integration, featuring secure login, task categorization, CRUD operations, and a clean, user-friendly interface for efficient organization.",
      github: "https://github.com/kavishka-wilagedara/taskmate",
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 font-mono bg-rainbow"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-800 text-center mt-2 sm:mt-10">
          Recent Work
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5">
          Here are some of the projects I’ve been working on recently,
          showcasing my skills in full-stack development.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-100
      hover:shadow-2xl hover:-translate-y-2 hover:border-b-4 hover:border-r-4 hover:border-b-black hover:border-r-black transition-all duration-500 ease-out"
            >
              {/* Floating gradient glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-linear-to-br from-blue-200 via-purple-200 to-pink-200 blur-2xl -z-10 transition-opacity duration-700"></div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {project.name}
              </h3>

              <div className="inline-block px-3 py-1 mb-4 bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200 shadow-sm">
                {project.type}
              </div>

              <p className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 mb-3 rounded-md border-l-4 border-blue-400 shadow-inner">
                {project.techStack}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {project.infor}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-2.5 px-5 text-white text-sm font-semibold 
        rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700
        transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <VscGithubAlt size={22} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-end  mt-10 text-center">
          <a
            href="https://github.com/kavishka-wilagedara?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-2 text-white rounded-4xl bg-black hover:bg-gray-900 transition-colors duration-300 "
          >
            see more
            <IoIosArrowRoundForward size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
