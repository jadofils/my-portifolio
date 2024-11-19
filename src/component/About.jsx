import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import photo from './asset/jado.jpg';

function About() {
  const spanRef = useRef();

  // Animate the span on load
  useEffect(() => {
    const span = spanRef.current;
    if (span) {
      span.classList.add('animate-move');
      setTimeout(() => {
        span.classList.remove('animate-move');
      }, 3000); // Remove the animation after 3 seconds
    }
  }, []);

  return (
    <section id="about" className="my-16 px-4 md:px-16">
      <h3 className="section-title">About Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center">
          <img
            src={photo}
            alt="Jado Fils"
            className="w-64 h-64 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div>
          <p className="text-lg mb-6 leading-relaxed">
            <span ref={spanRef} className="font-semibold text-blue-600">
              Hello, I am Jado Fils
            </span>
            . I'm a passionate full-stack developer specializing in frameworks like Spring Boot, Express.js, Django, and frontend technologies such as React and Next.js. I enjoy crafting clean, efficient code to bring ideas to life through innovative web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <FaCode className="text-blue-500 mr-2" size={24} />
              <span>Frontend Development</span>
            </div>
            <div className="flex items-center">
              <FaServer className="text-green-500 mr-2" size={24} />
              <span>Backend Development</span>
            </div>
            <div className="flex items-center">
              <FaDatabase className="text-purple-500 mr-2" size={24} />
              <span>Database Design</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="card p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Skills</h3>
          <h4 className="text-lg font-medium mb-2">Frameworks</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Spring Boot
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Express.js
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Next.js
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>React
            </li>
          </ul>
          <h4 className="text-lg font-medium mt-4 mb-2">Programming</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>JavaScript
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Java
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Python
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>SQL
            </li>
          </ul>
        </div>
        <div className="card p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Experience</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Full-Stack Developer in Class Projects
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Freelance Web Developer
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Personal Projects with Django and React
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
