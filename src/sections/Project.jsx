import React, { useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";

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
        "Developed a Spring Boot and MySQL-based Inventory Management System with REST APIs, including product CRUD operations, expiry notifications, and feedback services for efficient tracking and continuous improvement.",
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-gray-800 text-center">
          Recent Work
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-5 sm:p-5 rounded-lg sm:rounded-xl bg-rainbow
             border-b-2 border-r-2 border-gray-300 
             hover:border-b-4 hover:border-r-4 hover:border-black
             transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-gray-600 transition-colors">
                {project.name}
              </h3>

              <div className="inline-block px-3 py-1 mb-3 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                {project.type}
              </div>

              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 bg-gray-50 px-3 py-2 rounded-md border-l-4 border-blue-400">
                  {project.techStack}
                </p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4 rounded-xl border-1 border-gray-100 bg-rainbow">
                {project.infor}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 w-full justify-center py-2 px-4 
     bg-gradient-to-r from-blue-500 to-blue-600 
     text-white text-sm font-semibold rounded-lg 
     hover:from-blue-600 hover:to-blue-700 
     transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <VscGithubAlt size={24} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
