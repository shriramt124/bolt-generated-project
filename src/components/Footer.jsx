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
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          {/* Add social media icons here */}
          <a href="#" className="mx-2 text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white"><i className="fab fa-github"></i></a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Resume Maker. All rights reserved. |
          <a href="#" className="text-gray-400 hover:text-white"> Privacy Policy</a> |
          <a href="#" className="text-gray-400 hover:text-white"> Terms of Service</a>
        </p>
      </div>
    </animated.footer>
  );
};

export default Footer;
