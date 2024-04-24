"use client"

import React, { useState, useEffect } from 'react';
import StudentInfoBanner from './StudentInfoBanner'; 
import AcademicSummaryBanner from './AcademicSummaryBanner'; 
import { fetchStudentInfo, fetchUserCGPA } from '@/app/roadmap/apiCalls';

const StudentProfileTabs = ({ studentInfo, userCGPA }) => {
  const [activeTab, setActiveTab] = useState('info'); 
  const [stuinfo, setStuinfo] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const studentInfoData = await fetchStudentInfo();
        setStuinfo(studentInfoData);
        const cgpaData = await fetchUserCGPA();
        setUserCGPA(cgpaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="m-5">
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
      
      {activeTab === 'info' && <StudentInfoBanner studentInfo={stuinfo} />}
      {activeTab === 'summary' && <AcademicSummaryBanner cgpa={userCGPA} />}
    </div>
  );
};

export default StudentProfileTabs;
