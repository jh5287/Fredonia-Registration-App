"use client"

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import StudentInfoBanner from './StudentInfoBanner'; 
import AcademicSummaryBanner from './AcademicSummaryBanner'; 
import { fetchStudentInfo, fetchUserCGPA, fetchFoundationsCGPA } from '@/app/roadmap/apiCalls';

const StudentProfileTabs = ({ studentInfo }) => {
  const [activeTab, setActiveTab] = useState('info'); 
  const [stuinfo, setStuinfo] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [foundationCgpa, setFoundationCgpa] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const loadData = async () => {
      try {
        const studentInfoData = await fetchStudentInfo(session.user.email);
        setStuinfo(studentInfoData);
        const cgpaData = await fetchUserCGPA(session.user.email);
        console.log("CGPA Data for banner: ",cgpaData);
        setUserCGPA(cgpaData);
        const foundationCgpaData = await fetchFoundationsCGPA(session.user.email);
        setFoundationCgpa(foundationCgpaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [status]);

  return (
    <div className="m-5">
      {/* Tab Bar */}
      <div className="flex py-3 ">
        <div className='px-2'>
        <button
          className={`py-2 px-4 border-b-2 transition-all duration-300 ${activeTab === 'info' ? 'border-b-2 border-primary' : 'hover:border-accent'}`}
          onClick={() => setActiveTab('info')}
        >
          Student Info
        </button>
        </div>
        <div>
        <button
          className={`py-2 px-4 border-b-2 transition-all duration-300 ${activeTab === 'summary' ? 'border-b-2 border-primary' : 'hover:border-accent'}`}
          onClick={() => setActiveTab('summary')}
        >
          Academic Summary
        </button>
        </div>
      </div>
      
      {activeTab === 'info' && <StudentInfoBanner studentInfo={stuinfo} />}
      {activeTab === 'summary' && <AcademicSummaryBanner cgpa={userCGPA} foundationCgpa={foundationCgpa}/>}
    </div>
  );
};

export default StudentProfileTabs;
