import React from 'react';
import { useSpring, animated } from 'react-spring';

const Footer = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  return (
    <animated.footer style={props} className="bg-glass-bg backdrop-blur-lg border-t border-glass-border p-8 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">AI Resume Maker</h4>
            <p className="text-gray-400">Create professional resumes, effortlessly.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#templates" className="text-gray-400 hover:text-white">Templates</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex">
              <a href="#" className="mx-2 text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
              />
              <button
                type="submit"
                className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-glass-border" />

        {/* Copyright & Legal */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AI Resume Maker. All rights reserved. |
          <a href="#" className="hover:text-white"> Privacy Policy</a> |
          <a href="#" className="hover:text-white"> Terms of Service</a>
        </div>
      </div>
    </animated.footer>
  );
};

export default Footer;
