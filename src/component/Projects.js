import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import chat from './asset/image.png';
import data from './asset/data.png';
import resp from './asset/resphoto.png';

const projects = [
  {
    title: 'gallery platform ',
    description: 'React applicatio for search and download image for your galley.',
    image: chat,
    github: 'https://github.com/Udenis123/GalleryInReact',
    demo: 'https://gallerydenis.netlify.app/'
  },
  {
    title: 'Food Order Platform',
    description: 'A React-based Food Order application frontend design with Tailwind CSS.',
    image: resp,
    github: 'https://github.com/Udenis123/SpringBootCrudeOperation',
    demo: 'https://denisrestuarant.netlify.app/'
  },
  {
    title: 'Data Analytics Platform',
    description: 'A React-based Data Analytics application frontend design with Tailwind CSS.',
    image: data,
    github: 'https://github.com/Udenis123/fronted_Design_React-with_Tailwind',
    demo: 'https://denis1reactapp.netlify.app/'
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
