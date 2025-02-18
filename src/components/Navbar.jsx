import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.slow
  });

  const navigate = useNavigate();

  return (
    <animated.nav style={props} className="bg-glass-bg backdrop-blur-lg border-b border-glass-border p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AI Resume Maker</Link>
        <div className="space-x-4">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <button className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </animated.nav>
  );
};

export default Navbar;
