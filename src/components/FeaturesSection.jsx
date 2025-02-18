import React from 'react';
import { useSpring, animated } from 'react-spring';

const FeaturesSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  return (
    <animated.section style={props} id="features" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Suggestions</h3>
            <p>Get personalized recommendations for your resume content.</p>
          </div>
          <div className="p-6 bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border">
            <h3 className="text-xl font-semibold mb-4">Multiple Templates</h3>
            <p>Choose from a variety of professionally designed templates.</p>
          </div>
          <div className="p-6 bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p>Create your resume with a simple and intuitive interface.</p>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default FeaturesSection;
