import React from 'react';
import { useSpring, animated } from 'react-spring';

const FeaturesSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const features = [
    {
      title: "AI-Powered Suggestions",
      description: "Get personalized recommendations for your resume content.",
      icon: "fas fa-brain"
    },
    {
      title: "Multiple Templates",
      description: "Choose from a variety of professionally designed templates.",
      icon: "fas fa-palette"
    },
    {
      title: "Easy to Use",
      description: "Create your resume with a simple and intuitive interface.",
      icon: "fas fa-desktop"
    },
    {
      title: "Real-Time Preview",
      description: "See your resume come to life with our real-time preview feature.",
      icon: "fas fa-eye"
    },
    {
      title: "Customizable Experiences",
      description: "Tailor your resume to highlight your unique experiences and skills.",
      icon: "fas fa-user-edit"
    },
    {
      title: "Export Options",
      description: "Export your resume in multiple formats including PDF and DOCX.",
      icon: "fas fa-file-export"
    },
  ];

  return (
    <animated.section style={props} id="features" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Discover the powerful features that make AI Resume Maker the best choice for creating professional resumes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border p-6">
              <div className="flex items-center mb-4">
                <i className={`${feature.icon} text-4xl text-primary-purple mr-4`}></i>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default FeaturesSection;
