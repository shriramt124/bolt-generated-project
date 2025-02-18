import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

// Animated gradient component
const AnimatedGradient = () => {
  const styles = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 15000 },
    loop: true,
  });

  return (
    <animated.div
      className="absolute inset-0 opacity-20"
      style={{
        ...styles,
        backgroundImage: 'linear-gradient(45deg, #7c3aed, #3b82f6, #10b981, #f59e0b)',
        backgroundSize: '400% 400%',
      }}
    />
  );
};

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const entranceAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.stiff,
    delay: index * 100,
  });

  const arrowRotation = useSpring({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: config.stiff,
  });

  const cardHover = useSpring({
    scale: hovered ? 1.02 : 1,
    y: hovered ? -5 : 0,
    config: config.gentle,
  });

  const contentReveal = useSpring({
    maxHeight: isOpen ? 400 : 0,
    opacity: isOpen ? 1 : 0,
    paddingTop: isOpen ? 16 : 0,
    paddingBottom: isOpen ? 24 : 0,
    config: config.stiff,
  });

  return (
    <animated.div
      ref={ref}
      style={entranceAnimation}
      className="relative mb-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatedGradient />
      <animated.div
        style={cardHover}
        className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClick}
          className="w-full px-8 py-6 text-left flex justify-between items-center group"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {index + 1}
              </span>
            </div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              {faq.question}
            </h3>
          </div>
          <animated.svg
            style={arrowRotation}
            className="w-8 h-8 text-purple-400 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </animated.svg>
        </button>

        <animated.div
          style={contentReveal}
          className="px-8 border-t border-white/5 overflow-hidden"
        >
          <p className="text-lg leading-relaxed text-gray-300 font-light">
            {faq.answer}
            {index === 4 && (
              <span className="ml-2 px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md">
                ✨ AI Powered
              </span>
            )}
          </p>
        </animated.div>
      </animated.div>
    </animated.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

 const faqData = [
    {
      question: "Who are you, and why did you build Reactive Resume?",
      answer: "I am a software developer passionate about creating tools that help people. I built Reactive Resume to provide a free and efficient way for job seekers to create professional resumes.",
    },
    {
      question: "How much does it cost to run Reactive Resume?",
      answer: "Reactive Resume is completely free to use. There are no hidden costs or subscription fees.",
    },
    {
      question: "Other than donating, how can I support you?",
      answer: "You can support us by spreading the word about Reactive Resume, contributing to the project on GitHub, or providing feedback to help us improve.",
    },
    {
      question: "What languages are supported on Reactive Resume?",
      answer: "Currently, Reactive Resume primarily supports English. However, we are working on adding support for more languages in the future.",
    },
    {
      question: "How does the OpenAI Integration work?",
      answer: "The OpenAI integration leverages advanced AI models to provide intelligent suggestions and improvements for your resume content, helping you create a more impactful resume.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Everything you need to know about Reactive Resume
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;