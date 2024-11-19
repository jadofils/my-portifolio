import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import chat from './asset/image.png';
import data from './asset/data.png';
import resp from './asset/resphoto.png';

const projects = [
  {
    title: 'Employee management system',
    description: 'This is springboot project with reactjs, typesctipt and tailwindcss, that help to manage the employees  ',
    image: chat,
    github: 'https://github.com/jadofils/springboot-employee-management-crud',
    demo: '#'
  },
  {
    title: 'Athome-online-shop',
    description: 'This is the php based project css,bootstrap,and js',
    image: resp,
    github: 'https://github.com/jadofils/At-Home-online-shop',
    demo: '#'
  },
  {
    title: 'Event Management System',
    description: 'This this project is built by nextjs framework and nextjs api on backend,ORM,prizma and postgresql',
    image: data,
    github: 'https://github.com/jadofils/event-management-system',
    demo: 'https://event-management-system-9hmm-oz0c2qpzb-jadofils-projects.vercel.app/auth/login'
  },

  {
    title: 'Weather async application',
    description: "This program is done by using flutter and dart with meteo data api's",
    image: data,
    github: 'https://github.com/jadofils/flutter_weather_app',
    demo: '#'
  },
  {
    title: 'User management project',
    description: "THis project is built in java servlet,jsp, html,css and js with mysql on backend side",
    image: data,
    github: 'https://github.com/jadofils/Java/tree/main/Simpleproject',
    demo: '#'
  },
  {
    title: 'Student study portal',
    description: "THis is django frame work project with sqlite as database that allows students to manage studies, tools and other api's like wikipedia,youtube,google, todo app, and other functionalities",
    image: data,
    github: 'https://github.com/jadofils/studentstudyportal',
    demo: '#'
  },
  {
    title: 'Expense-tracker project',
    description: "This project is built by using ejs templates,css and js on frontend ,also mongodb as database and express framework with nodejs as backend technologies, used to manage the the expenses to according to categories",
    image: data,
    github: 'https://github.com/jadofils/plp-final-project',
    demo: '#'
  },
  {
    title: 'product management demo',
    description: "This project is based on react technology and vanilla javascript, with json as my database",
    image: data,
    github: 'https://github.com/jadofils/react-router-crud',
    demo: '#'
  },
  {
    title: 'Data management system',
    description: "Php project with js and css for managing data of members of the company ",
    image: data,
    github: 'https://github.com/jadofils/php-data-management',
    demo: '#'
  },
  

  {
    title: 'Livestock farming project',
    description: "This is java project based on java libraries such as servlet,jsp and mysql as database management",
    image: data,
    github: 'https://github.com/jadofils/livestockfarming',
    demo: '#'
  },


  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="my-16">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-300">
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
