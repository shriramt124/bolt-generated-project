import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview-container">
      <div className="resume-preview-a4">
        <div className="p-8">
          <h1 className="text-4xl font-bold">{data.name}</h1>
          {/* Corrected rendering of contact information */}
          <p className="text-lg">
            {data.contact.email} {data.contact.phone ? `| ${data.contact.phone}` : ''}
          </p>
          <p className="mt-4">{data.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
