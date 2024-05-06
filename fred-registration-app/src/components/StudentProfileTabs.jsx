"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import StudentInfoBanner from "./StudentInfoBanner";
import AcademicSummaryBanner from "./AcademicSummaryBanner";
import {
  fetchStudentInfo,
  fetchUserCGPA,
  fetchFoundationsCGPA,
} from "@/app/roadmap/apiCalls";

const StudentProfileTabs = ({ studentInfo }) => {
  const [activeTab, setActiveTab] = useState('studentProfile'); 
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
        console.log("CGPA Data for banner: ", cgpaData);
        setUserCGPA(cgpaData);
        const foundationCgpaData = await fetchFoundationsCGPA(
          session.user.email
        );
        setFoundationCgpa(foundationCgpaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [status]);

  return (
    <div role="tablist" className="tabs tabs-lifted m-3 ">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Student Profile"
        checked={activeTab === 'studentProfile'}
        onChange={() => setActiveTab('studentProfile')}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box "
      >
        <StudentInfoBanner studentInfo={stuinfo} />
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Academic Summary"
        checked={activeTab === 'academicSummary'}
        onChange={() => setActiveTab('academicSummary')}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box "
      >
        <AcademicSummaryBanner
          cgpa={userCGPA}
          foundationCgpa={foundationCgpa}
        />
      </div>
    </div>
  );
};

export default StudentProfileTabs;
