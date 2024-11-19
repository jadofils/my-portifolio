import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import employee from './asset/employee.png';
import online from './asset/online.png';
import weather from './asset/weather.png';
import user from './asset/user.png';
import livestock from './asset/livestock.png';
import attendance from './asset/attendance.png';
import study from './asset/study.png';
import datas from './asset/datas.png';
import event from './asset/event.png';
import product from './asset/product.png';
import expense from './asset/expense.png';

const projects = [
  {
    title: 'Employee Management System',
    description: 'A Spring Boot project with React, TypeScript, and Tailwind CSS for managing employees.',
    image: employee,
    github: 'https://github.com/jadofils/springboot-employee-management-crud',
    demo: '#',
  },
  {
    title: 'Athome Online Shop',
    description: 'A PHP-based project utilizing CSS, Bootstrap, and JavaScript.',
    image: online,
    github: 'https://github.com/jadofils/At-Home-online-shop',
    demo: '#',
  },
  {
    title: 'Event Management System',
    description: 'Built with Next.js framework, Next.js API, Prisma ORM, and PostgreSQL.',
    image: event,
    github: 'https://github.com/jadofils/event-management-system',
    demo: 'https://event-management-system-9hmm-oz0c2qpzb-jadofils-projects.vercel.app/auth/login',
  },
  {
    title: 'Weather Async Application',
    description: 'A Flutter app using Dart and Meteo API for weather data.',
    image: weather,
    github: 'https://github.com/jadofils/flutter_weather_app',
    demo: '#',
  },
  {
    title: 'User Management Project',
    description: 'Built with Java Servlets, JSP, HTML, CSS, JavaScript, and MySQL.',
    image: user,
    github: 'https://github.com/jadofils/Java/tree/main/Simpleproject',
    demo: '#',
  },
  {
    title: 'Student Study Portal',
    description: 'A Django project with SQLite, integrating APIs like Wikipedia, YouTube, and Google.',
    image: study,
    github: 'https://github.com/jadofils/studentstudyportal',
    demo: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'An Express.js project with MongoDB for managing expenses by categories.',
    image: expense,
    github: 'https://github.com/jadofils/plp-final-project',
    demo: '#',
  },
  {
    title: 'Product Management Demo',
    description: 'React and Vanilla JavaScript-based project using JSON as a database.',
    image: product,
    github: 'https://github.com/jadofils/react-router-crud',
    demo: '#',
  },
  {
    title: 'Data Management System',
    description: 'A PHP project for managing company member data with CSS and JavaScript.',
    image: datas,
    github: 'https://github.com/jadofils/php-data-management',
    demo: '#',
  },
  {
    title: 'Livestock Farming Project',
    description: 'A Java project utilizing Servlets, JSP, and MySQL for livestock management.',
    image: livestock,
    github: 'https://github.com/jadofils/livestockfarming',
    demo: '#',
  },
  {
    title: 'Attendance Management System API',
    description: 'A Spring Boot MVC project for managing student attendance.',
    image: attendance,
    github: 'https://github.com/jadofils/attendence-management-system',
    demo: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="my-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300 flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition-colors duration-300 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
