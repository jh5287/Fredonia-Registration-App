import React from 'react';

// AcademicSummaryBanner component
const AcademicSummaryBanner = ({ cgpa, foundationCgpa }) => {
    return (
    <div className="p-4 bg-neutral rounded-lg shadow-md">
     <div className="flex justify-between py-2 gap-x-4">

            <div>
              <div className="stat py-0">
                <div className="stat-title">Cumulative GPA</div>
                <div className="stat-value">{cgpa ? cgpa.toFixed(2) : "Unavailable"} </div>
                <div className="stat-desc">Up by 0.04 since last semester!</div>
              </div>
            </div>

            <div>
              <div className="stat py-0">
                <div className="stat-title">General Education GPA</div>
                <div className="stat-value">{foundationCgpa ? foundationCgpa.toFixed(2) : "Unavailable"} </div>
                <div className="stat-desc">Up by 0.06 since last semester!</div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default AcademicSummaryBanner;