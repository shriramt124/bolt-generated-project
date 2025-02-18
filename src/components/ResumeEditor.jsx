import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ResumePreview from './ResumePreview';

const ResumeEditor = () => {
  const { templateId } = useParams(); // Get the template ID from the URL
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'preview'
  const [resumeData, setResumeData] = useState({
    templateId: templateId,
    name: 'shriram tiwari',
    contact: {
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });

    // Placeholder templates (for initial data)
  const templates = [
    { id: "1", name: "Modern Professional", initialData: {} }, // Add initialData
    { id: "2", name: "Clean and Minimalist", initialData: {} },
    { id: "3", name: "Creative Infographic", initialData: {} },
    { id: "4", name: "Executive Summary", initialData: {} },
    { id: "5", name: "Tech Focused", initialData: {} },
    { id: "6", name: "Academic CV", initialData: {} },
  ];

  useEffect(() => {
        // In a real app, you'd fetch template data from an API
        const selectedTemplate = templates.find(t => t.id === templateId);
        if (selectedTemplate) {
            // Initialize resumeData with the selected template's initial data
            setResumeData(prevData => ({
                ...prevData,
                ...selectedTemplate.initialData, // Merge initial data
                templateId: templateId, // Ensure templateId is set
            }));
        }
    }, [templateId]);


  const handleChange = (section, field, value) => {
    setResumeData(prevData => {
      if (section === 'contact' || section === 'name') {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      }
      //For other section like summary
      else{
        return {
          ...prevData,
          [section]: value
        }
      }
    });
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Create Your Resume</h1>

        {/* Mobile Tabs */}
        <div className="md:hidden flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l-md ${activeTab === 'form' ? 'bg-primary-purple text-white' : 'bg-glass-bg text-gray-300'}`}
            onClick={() => setActiveTab('form')}
          >
            Edit
          </button>
          <button
            className={`px-4 py-2 rounded-r-md ${activeTab === 'preview' ? 'bg-primary-purple text-white' : 'bg-glass-bg text-gray-300'}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form (Desktop) / Form Tab (Mobile) */}
          <div className={`${activeTab === 'preview' && 'hidden'} md:block`}>
            <div className="bg-glass-bg backdrop-blur-lg rounded-lg p-6 border border-glass-border">
              <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={resumeData.name}
                  onChange={(e) => handleChange('name', null, e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={resumeData.contact.email}
                  onChange={(e) => handleChange('contact', 'email', e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={resumeData.contact.phone}
                  onChange={(e) => handleChange('contact', 'phone', e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Summary</label>
                <textarea
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-glass-bg border-glass-border text-white"
                  value={resumeData.summary}
                  onChange={(e) => handleChange('summary', null, e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Preview (Desktop) / Preview Tab (Mobile) */}
          <div className={`${activeTab === 'form' && 'hidden'} md:block`}>
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
