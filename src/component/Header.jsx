import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">My Portfolio</h1>

        {/* Navigation Menu */}
        <ul className="flex space-x-6 text-sm md:text-base">
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 text-lg" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
