"use client"

import React, { useState, useEffect } from 'react';
import StudentInfoBanner from './StudentInfoBanner'; 
import AcademicSummaryBanner from './AcademicSummaryBanner'; 
import { fetchStudentInfo, fetchUserCGPA, fetchFoundationsCGPA } from '@/app/roadmap/apiCalls';

const StudentProfileTabs = ({ studentInfo }) => {
  const [activeTab, setActiveTab] = useState('info'); 
  const [stuinfo, setStuinfo] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [foundationCgpa, setFoundationCgpa] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const studentInfoData = await fetchStudentInfo();
        setStuinfo(studentInfoData);
        const cgpaData = await fetchUserCGPA();
        console.log("CGPA Data for banner: ",cgpaData);
        setUserCGPA(cgpaData);
        const foundationCgpaData = await fetchFoundationsCGPA();
        setFoundationCgpa(foundationCgpaData);
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
      {activeTab === 'summary' && <AcademicSummaryBanner cgpa={userCGPA} foundationCgpa={foundationCgpa}/>}
    </div>
  );
};

export default StudentProfileTabs;
