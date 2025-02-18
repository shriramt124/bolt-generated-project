import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TemplatesPage = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'college', 'fresher', 'experienced'
  const navigate = useNavigate(); // Get the navigate function

  // Placeholder template data with categories
  const templates = [
    { id: 1, name: "Modern Professional", image: "https://placehold.co/500x700/3498DB/FFFFFF?text=Template+1&font=Montserrat", category: "experienced" },
    { id: 2, name: "Clean and Minimalist", image: "https://placehold.co/500x700/2ECC71/FFFFFF?text=Template+2&font=Montserrat", category: "fresher" },
    { id: 3, name: "Creative Infographic", image: "https://placehold.co/500x700/E74C3C/FFFFFF?text=Template+3&font=Montserrat", category: "college" },
    { id: 4, name: "Executive Summary", image: "https://placehold.co/500x700/F1C40F/FFFFFF?text=Template+4&font=Montserrat", category: "experienced" },
    { id: 5, name: "Tech Focused", image: "https://placehold.co/500x700/9B59B6/FFFFFF?text=Template+5&font=Montserrat", category: "fresher" },
    { id: 6, name: "Academic CV", image: "https://placehold.co/500x700/34495E/FFFFFF?text=Template+6&font=Montserrat", category: "college" },
  ];

  const filteredTemplates = filter === 'all'
    ? templates
    : templates.filter(template => template.category === filter);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Choose a Template</h2>
        <p className="text-lg mb-8 text-center text-gray-400">
          Select a template that best suits your style and industry.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary-purple text-white' : 'bg-glass-bg text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full ${filter === 'college' ? 'bg-primary-purple text-white' : 'bg-glass-bg text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setFilter('college')}
          >
            College Student
          </button>
          <button
            className={`px-4 py-2 rounded-full ${filter === 'fresher' ? 'bg-primary-purple text-white' : 'bg-glass-bg text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setFilter('fresher')}
          >
            Fresher
          </button>
          <button
            className={`px-4 py-2 rounded-full ${filter === 'experienced' ? 'bg-primary-purple text-white' : 'bg-glass-bg text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setFilter('experienced')}
          >
            Experienced
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={template.image} alt={template.name} className="w-full h-auto" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{template.name}</h3>
                <button
                  className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full"
                  onClick={() => navigate(`/create/${template.id}`)} // Navigate with template ID
                >
                  Select Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesPage;
