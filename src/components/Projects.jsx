import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import aibased from "../assets/projects/ai-based.png";
import weatherApp from "../assets/projects/weather.png";
import ieeeSite from "../assets/projects/ieee.png";
import iriesModel from "../assets/projects/iries.png";
import insurance from "../assets/projects/insurance.png";
import diabetes from "../assets/projects/diabetes.png";

const projects = [
  {
    title: "AI-Based Tutoring Platform",
    description:
      "Built an intelligent tutoring system with a Python AI assistant and frontend using HTML/CSS.",
    url: "https://github.com/Adarsh130/Insurance_Prediction",
    demo: "https://diabetesprediction.up.railway.app/",
    image: aibased,
  },
  {
    title: "Weather APP",
    description:
      "A weather app using Flask and HTML/Bootstrap that fetches real-time weather data.",
    url: "https://github.com/Adarsh130/Weather_APP",
    demo: "https://weather-app-by-adarsh.up.railway.app/",
    image: weatherApp,
  },
  {
    title: "Bit IEEE Conference Webpage",
    description:
      "A modern React.js powered responsive website for an IEEE conference or college event.",
    url: "https://github.com/Adarsh130/Bit_IEEE_website",
    demo: "https://bit-conference-2025.netlify.app",
    image: ieeeSite,
  },
  {
    title: "IRIES MODEL",
    description:
      "Jupyter Notebook showcasing clustering and modeling techniques using the IRIES dataset.",
    url: "https://github.com/Adarsh130/IRIES_MODEL",
    demo: "https://github.com/Adarsh130/IRIES_MODEL",
    image: iriesModel,
  },
  {
    title: "Insurance Prediction",
    description:
      "ML project predicting insurance purchase behavior using classification models.",
    url: "https://github.com/Adarsh130/Insurance_Prediction",
    demo: "https://insurance-prediction.up.railway.app/",
    image: insurance,
  },
  {
    title: "Diabetes Prediction",
    description:
      "Predicts diabetes likelihood using supervised learning in a Jupyter Notebook.",
    url: "https://github.com/Adarsh130/Diabetes_Prediction",
    demo: "https://diabetesprediction.up.railway.app/",
    image: diabetes,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Blurred background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl animate-blob2 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white drop-shadow-lg mb-14">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-3xl shadow-xl p-6 flex flex-col justify-between min-h-[380px] transition-transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl mb-4 shadow-md"
                />
              )}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-800 transition text-sm"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition text-sm"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 italic mt-1">
                    🔒 Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-25px) scale(1.1); }
          }
          .animate-blob1 {
            animation: blob1 9s infinite ease-in-out;
          }

          @keyframes blob2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(25px) scale(1.1); }
          }
          .animate-blob2 {
            animation: blob2 11s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
