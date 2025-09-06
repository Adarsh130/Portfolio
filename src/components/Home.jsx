import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IsotopeUI } from "./isotope";

const Home = () => {
  const fullText = "Adarsh Paswan";
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // Typing effect
  useEffect(() => {
    let typingSpeed = isDeleting ? 80 : 150;
    let timeout;

    if (!isDeleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.substring(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.substring(0, displayed.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, loopNum, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500 animate-fade-in"
    >
      {/* Isotope UI Background */}
      <IsotopeUI
        theme="blue"
        intensity="high"
        showGrid={true}
        showParticles={true}
        showBackground={true}
        animated={true}
        glowEffects={true}
        magneticParticles={true}
        morphingShapes={true}
      />
      <div className="relative z-10 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-xl glow-text">
          Hi, I'm{" "}
          <span className="text-blue-700 dark:text-blue-400 border-r-2 border-blue-700 dark:border-blue-400 pr-1 animate-cursor">
            {displayed}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-white/80 max-w-2xl mx-auto font-medium">
          🚀 Aspiring AI/ML Engineer & Full Stack Developer crafting smart and scalable digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="/Adarsh_Resume.pdf"
            download
            className="flex items-center justify-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition-transform transform hover:scale-105"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Animations & Styles */}
      <style>
        {`
          @keyframes cursor {
            0%, 100% { border-color: transparent; }
            50% { border-color: #2563eb; }
          }
          .animate-cursor {
            animation: cursor 1s steps(2) infinite;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
          }

          .glow-text {
            text-shadow: 0 0 8px rgba(59,130,246,0.6), 0 0 12px rgba(59,130,246,0.4);
          }
        `}
      </style>
    </section>
  );
};

export default Home;