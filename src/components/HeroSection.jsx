import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 300, friction: 20 },
  });

  const navigate = useNavigate(); // Get the navigate function

  return (
    <animated.section style={props} className="flex-grow flex items-center justify-center py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Create a Professional Resume in Minutes
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Powered by AI, designed for you.
        </p>
        <button
          className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
          onClick={() => navigate('/templates')} // Navigate to /templates
        >
          Get Started
        </button>
      </div>
    </animated.section>
  );
};

export default HeroSection;
