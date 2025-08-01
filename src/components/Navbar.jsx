import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  const navItems = [
    'home',
    'about',
    'skills',
    'projects',
    'experience',
    'testimonials',
    'blog',
    'contact',
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed w-full top-0 left-0 bg-white dark:bg-zinc-900 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-md shadow-lg z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-extrabold text-2xl text-blue-600 dark:text-blue-400 tracking-tight glow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            PORTFOLIO
          </span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item} className="group relative">
              <a
                href={`#${item}`}
                className="capitalize px-3 py-1 rounded-md text-gray-800 dark:text-gray-200 transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded"></span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-blue-100 dark:hover:bg-zinc-600 text-gray-900 dark:text-gray-100 shadow-md transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-blue-100 dark:hover:bg-zinc-600 text-gray-900 dark:text-gray-100 shadow-md transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-2xl text-gray-700 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 px-6 py-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleNavClick}
              className="block capitalize text-gray-800 dark:text-gray-200 py-2 border-b border-gray-200 dark:border-zinc-700"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Glow effect */}
      <style>
        {`
          .glow {
            text-shadow: 0 0 5px rgba(59,130,246,0.5), 0 0 15px rgba(59,130,246,0.3);
          }
        `}
      </style>
    </motion.nav>
  );
};

export default Navbar;
