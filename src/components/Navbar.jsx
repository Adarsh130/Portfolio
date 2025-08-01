import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-white font-medium">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Desktop Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block text-yellow-500 dark:text-white text-xl"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="text-yellow-500 dark:text-white text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-800 px-4 py-4 space-y-4 text-gray-800 dark:text-white font-medium">
          <li><a href="#home" className="block" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="block" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" className="block" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="block" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
