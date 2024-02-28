import React from 'react';

// AcademicSummaryBanner component
const AcademicSummaryBanner = ({ cgpa }) => {
  return (
    <div className="p-4 bg-neutral-50 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">Academic Summary</h1>
      <p className="text-lg">CGPA: {cgpa ? cgpa.toFixed(2) : 'Unknown'}</p>
    </div>
  );
};

export default AcademicSummaryBanner;
