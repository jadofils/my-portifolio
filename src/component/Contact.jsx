import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validate input as the user types
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };
    if (name === 'name') {
      errors.name = value.trim() === '' ? 'Name is required' : '';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.email = !emailRegex.test(value) ? 'Enter a valid email address' : '';
    } else if (name === 'message') {
      errors.message = value.trim() === '' ? 'Message is required' : '';
    }
    setFormErrors(errors);
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = 'Name is required';
    if (!formValues.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Enter a valid email address';
    }
    if (!formValues.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormValues({ name: '', email: '', message: '' });
    setFormErrors({});
    setSubmitStatus('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission success
      setSubmitStatus('Your message has been sent successfully!');
      resetForm(); // Reset form after successful submission
    } else {
      setSubmitStatus('Please fix the errors before submitting.');
    }
  };

  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Get in touch</h3>
          <p className="mb-6 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex space-x-6">
            <a href="mailto:denisdideho@gmail.com" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/denis-uwihirwe-a23b13285/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Udenis123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-md shadow-md"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onFocus={() => setNameFocused(true)}
              onBlur={() => {
                setNameFocused(false);
                validateField('name', formValues.name);
              }}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${
                nameFocused ? 'ring-2 ring-blue-500' : ''
              } focus:outline-none transition-all ${
                formErrors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter your name"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => {
                setEmailFocused(false);
                validateField('email', formValues.email);
              }}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${
                emailFocused ? 'ring-2 ring-blue-500' : ''
              } focus:outline-none transition-all ${
                formErrors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => {
                setMessageFocused(false);
                validateField('message', formValues.message);
              }}
              onChange={handleInputChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${
                messageFocused ? 'ring-2 ring-blue-500' : ''
              } focus:outline-none transition-all ${
                formErrors.message ? 'border-red-500' : ''
              }`}
              placeholder="Enter your message"
            ></textarea>
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>

          {/* Submission Feedback */}
          {submitStatus && (
            <p className={`text-sm ${submitStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {submitStatus}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={Object.keys(formErrors).length > 0}
            className={`bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 ${
              Object.keys(formErrors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
