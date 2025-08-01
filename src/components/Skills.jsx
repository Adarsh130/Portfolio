import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiC, SiMongodb, SiTensorflow } from "react-icons/si";
import { MdOutlineMemory } from "react-icons/md";

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "DSA with Java", icon: <FaJava className="text-red-600" /> },
  { name: "C Programming", icon: <SiC className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Machine Learning", icon: <MdOutlineMemory className="text-green-600" /> },
  { name: "Deep Learning", icon: <SiTensorflow className="text-orange-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 py-20 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-400 opacity-30 rounded-full blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-400 opacity-30 rounded-full blur-3xl animate-blob2 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white drop-shadow-lg mb-12">
   Skills
</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-white px-1">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
          .animate-blob1 {
            animation: blob1 8s infinite ease-in-out;
          }

          @keyframes blob2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(20px) scale(1.05); }
          }
          .animate-blob2 {
            animation: blob2 10s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
