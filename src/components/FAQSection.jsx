import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg mb-8 text-gray-400">Here are some questions I often get asked about Reactive Resume.</p>
            
          </div>
          <div className="col-span-1 space-y-2">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              const arrowAnimation = useSpring({
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                config: { tension: 200, friction: 22 },
              });

              const contentAnimation = useSpring({
                maxHeight: isOpen ? (isOpen ? '1000px' : '0px') : '0px',
                opacity: isOpen ? 1 : 0,
                config: { tension: 200, friction: 22 },
              });

              return (
                <div key={index} className="py-2">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium text-white">{faq.question}</span>
                    <animated.svg
                      style={arrowAnimation}
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </animated.svg>
                  </button>
                  <animated.div style={contentAnimation} className="overflow-hidden">
                    <p className="mt-2 text-gray-400">{faq.answer}</p>
                  </animated.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
