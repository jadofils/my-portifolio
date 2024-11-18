import React, { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    // Send the email using the form data
    emailjs.sendForm('service_11uj9kf', 'template_yqwwfn2', form.current, 'Tdpnvx5oUXAMVQY7U')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent!');
          // Clear the form after submission
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };

  return (
    <section id="contact" className="my-16">
      <h2 className="section-title">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Get in touch</h3>
          <p className="mb-6 text-lg">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="flex space-x-6">
            <a href="mailto:denisdideho@gmail.com" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.linkedin.com/in/denis-uwihirwe-a23b13285/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/Udenis123" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 card p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
