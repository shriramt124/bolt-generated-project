import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ContactPage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      // Simulate success or error
      const random = Math.random();
      if (random > 0.5) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <animated.section style={props} className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-lg mb-8 text-center text-gray-400">
          Have questions or need assistance? Contact us using the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-2">Email: hello@example.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300">Address: 123 Main St, Anytown, USA</p>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-glass-bg backdrop-blur-lg rounded-lg p-8 border border-glass-border">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>

            {submissionStatus === 'success' && (
              <div className="mt-4 text-green-500">Thank you! Your message has been sent.</div>
            )}
            {submissionStatus === 'error' && (
              <div className="mt-4 text-red-500">Oops! There was an error submitting your message. Please try again.</div>
            )}
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default ContactPage;
