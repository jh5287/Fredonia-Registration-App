import React, { useState } from 'react';
import StudentInfoBanner from './StudentInfoBanner'; 
import AcademicSummaryBanner from './AcademicSummaryBanner'; 

const StudentProfileTabs = ({ studentInfo, userCGPA }) => {
  const [activeTab, setActiveTab] = useState('info'); 

  return (
    <div className="">
      {/* Tab Bar */}
      <div className="flex py-3">
        <button
          className={`py-2 px-4 ${activeTab === 'info' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Student Info
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'summary' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          Academic Summary
        </button>
      </div>
      
      {activeTab === 'info' && <StudentInfoBanner studentInfo={studentInfo} />}
      {activeTab === 'summary' && <AcademicSummaryBanner cgpa={userCGPA} />}
    </div>
  );
};

export default StudentProfileTabs;
