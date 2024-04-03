import React from 'react';

// AcademicSummaryBanner component
const AcademicSummaryBanner = ({ cgpa }) => {
    return (
    <div className="p-4 bg-neutral-50 rounded-lg shadow-md">
     <div className="flex flex-row flex-wrap py-2 gap-x-4">
        <div className="">
          <span className="font-bold">CGPA</span> {cgpa ? cgpa.toFixed(2) : "Unavailable"} 
        </div>
        </div>
    </div>
  );
};

export default AcademicSummaryBanner;