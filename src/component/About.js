import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import photo from './asset/denis2.JPG'


function About() {
  return (
    <section id="about" className="my-5">
      <h3 className="section-title">About Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center ">
          <img src={photo} alt="denis" className="w-64 h-64 rounded-full object-cover shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-6 leading-relaxed">
            I'm a passionate full-stack developer specializing in Spring Boot and React. With a keen eye for detail and a love for clean, efficient code, I bring ideas to life through innovative web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <FaCode className="text-blue-500 mr-2" size={24} />
              <span>Frontend Dev</span>
            </div>
            <div className="flex items-center">
              <FaServer className="text-green-500 mr-2" size={24} />
              <span>Backend Dev</span>
            </div>
            <div className="flex items-center">
              <FaDatabase className="text-purple-500 mr-2" size={24} />
              <span>Database Design</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Skills</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Spring Boot</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>React</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Java</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>JavaScript</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>RESTful APIs</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>SQL</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Experience</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Full-stack Developer in class project and my project</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Freelance Web Developer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;