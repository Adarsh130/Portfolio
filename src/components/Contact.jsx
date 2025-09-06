import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import React from "react";
import { IsotopeUI } from "./isotope";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-500 overflow-hidden"
    >
      {/* Isotope UI Background */}
      <IsotopeUI
        theme="green"
        intensity="high"
        showGrid={true}
        showParticles={true}
        showBackground={true}
        animated={true}
        glowEffects={true}
        magneticParticles={true}
        morphingShapes={false}
      />
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-blob2 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white drop-shadow mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Feel free to reach out for collaborations, opportunities, or just to connect!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="mailto:adarshpaswan1106@gmail.com"
            className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
          >
            <FaEnvelope className="text-2xl text-blue-500" />
            <span>adarshpaswan1106@gmail.com</span>
          </a>
          <a
            href="tel:+918382815116"
            className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
          >
            <FaPhone className="text-2xl text-green-500" />
            <span>+91-8382815116</span>
          </a>
          <a
            href="https://github.com/Adarsh130"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
          >
            <FaGithub className="text-2xl text-black dark:text-white" />
            <span>github.com/Adarsh</span>
          </a>
          <a
            href="https://linkedin.com/in/adarsh1306"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
          >
            <FaLinkedin className="text-2xl text-blue-700" />
            <span>linkedin.com/in/Adarsh</span>
          </a>
          <a
            href="https://instagram.com/_adarsh.13._"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
          >
            <FaInstagram className="text-2xl text-pink-500" />
            <span>instagram.com/Adarsh</span>
          </a>
          <a
            href="https://twitter.com/Zacknyt03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-gray-800 dark:text-white"
          >
            <FaTwitter className="text-2xl text-blue-400" />
            <span>twitter.com/Adarsh</span>
          </a>
        </div>
      </div>

      {/* Animations for blobs */}
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

export default Contact;
