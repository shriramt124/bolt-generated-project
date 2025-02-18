import React from 'react';
import { useSpring, animated } from 'react-spring';

const NewFeaturesSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const features = [
    {
      title: "AI-Powered Resume Creation",
      description: "Leverage the power of AI to create compelling resumes that highlight your strengths and experiences.",
      icon: "fas fa-brain" // Placeholder Font Awesome icon class
    },
    {
      title: "Customizable Templates",
      description: "Choose from a wide range of professionally designed templates and customize them to fit your unique style.",
      icon: "fas fa-palette" // Placeholder Font Awesome icon class
    },
    {
      title: "Real-Time Preview",
      description: "See your resume come to life with our real-time preview feature, ensuring every detail is perfect before you finalize.",
      icon: "fas fa-desktop" // Placeholder Font Awesome icon class
    },
    {
      title: "Multi-Format Export",
      description: "Export your resume in multiple formats including PDF, DOCX, and more, making it easy to share with potential employers.",
      icon: "fas fa-file-export" // Placeholder Font Awesome icon class
    }
  ];

  return (
    <animated.section style={props} id="new-features" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Amazing Features</h2>
        <p className="text-lg text-gray-400 mb-16">
          Unlock the potential of AI to build your professional resume and stand out from the competition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-glass-bg backdrop-blur-lg rounded-xl p-8 border border-glass-border">
              <div className="mb-6">
                <i className={`${feature.icon} text-4xl primary-purple-text`}></i> {/* Placeholder icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default NewFeaturesSection;
