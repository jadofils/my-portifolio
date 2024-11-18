import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Denis Uwihirwe All rights reserved.</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Made with ❤️ using React and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;