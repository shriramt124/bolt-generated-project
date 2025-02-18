import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FAQSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

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
    <animated.section style={props} id="faq" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg mb-8">
              Here are some questions I often get asked about Reactive Resume.
            </p>
            <p className="text-sm mb-8">
              Unfortunately, this section is available only in English, as I do not want to burden translators with having to translate these large paragraphs of text.
            </p>
          </div>
          <div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-400 pb-4">
                  <button
                    className="flex justify-between items-center w-full"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="text-gray-400">
                      {openIndex === index ? '▲' : '▼'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-300">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default FAQSection;
