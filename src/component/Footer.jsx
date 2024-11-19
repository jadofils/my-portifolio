import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Jado Fils SEZIKEYE. All rights reserved.
        </p>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
          Made with ❤️ using React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
