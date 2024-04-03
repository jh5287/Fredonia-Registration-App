"use client";
import { useState, useEffect } from "react";
import AcademicSummaryBanner from "@/components/AcademicSummaryBanner";
import { useSession } from "next-auth/react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";

const WhatIfSemester = ({ number, semesterCatalogData, userCourses, catalogData }) => {
    const [currentCourses, setCurrentCourses] = useState(Array(semesterCatalogData.length).fill(''));//state to hold the current course
    
    const handleCourseChange = (e, index) => {
      const course = e.target.value;
      setCurrentCourses(prevCourses => {
        const newCourses = [...prevCourses];
        newCourses[index] = course;
        return newCourses;
      });
    };

    const getCourseStatusIcon = (crn) => {
      // Find all courses with the given CRN
      const coursesWithCRN = userCourses.filter(course => course.CRN === crn);
    
      // If there are courses with the given CRN, find the most recent one
      if (coursesWithCRN.length > 0) {
        const mostRecentCourse = coursesWithCRN.reduce((mostRecent, course) => {
          return (mostRecent.TermID > course.TermID) ? mostRecent : course;
        });
    
        // Now switch on the status of the most recent course
        switch (mostRecentCourse.Status) {
          case "Completed":
            return <FaCheckCircle color="green" />;
          case "Enrolled":
            return <FaUserCheck color="blue" />;
          case "Failed":
            return <FaTimesCircle color="red"/>;
          default:
            return null;
        }
      } else {
        // If there is no course with the given CRN
        return <FaRegCircle />;
      }
    };
  
    return (
      <>
        <div className="">
          <h1 className="py-2 pl-1 text-lg">Semester {number}</h1>
          <div className="border rounded">
            <table className="table">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">Course Code</th>
                  <th>Course Title</th>
                  <th>Credits</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {semesterCatalogData.map((item, index) => {
                  const statusIcon = getCourseStatusIcon(item.Course.CRN);
                  const courseStatus = userCourses.find((course) => course.CRN === item.Course.CRN);
                  return (
                    <tr key={index}>
                      <td>{currentCourses[index] === undefined || currentCourses.length <= 0 ? item.Course.CourseCode : currentCourses[index]}</td>
                      <td>
                        <select className="select select-primary w-full" onChange={(e) => handleCourseChange(e, index)}>
                            <option selected disabled>{item.Course.Title}</option>
                            {catalogData.map((item, index) => (
                                <option key={index} value={item.Course.CourseCode}>{item.Course.Title}</option>
                            ))}
                        </select>
                      </td>
                      <td>{item.Course.Credits}</td>
                      <td className="tooltip" data-tip={courseStatus ? courseStatus.Status : "Not Taken"}>{statusIcon}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

const RoadMap = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const { data: session, status } = useSession();

  // Fetch catalog data
  const fetchCatalog = async () => {
    try {
      const res = await fetch("/api/catalog?catID=1");
      const data = await res.json();
      setCatalog(data);
    } catch (err) {
      console.error("Failed to fetch catalog:", err);
    }
  };

  // Fetch user course data
  const fetchUserCourses = async () => {
    try {
      const userEmail = "wals9256@fredonia.edu";
      const response = await fetch(
        `/api/student/studentCourses?email=${userEmail}`
      );
      const data = await response.json();
      setUserCourses(data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  // Fetch user CGPA data
  const fetchUserCGPA = async () => {
    try {
      const userEmail = "wals9256@fredonia.edu";
      const response = await fetch(`/api/student/CGPA?email=${userEmail}`);
      const data = await response.json();
  
      if (Array.isArray(data) && data.length > 0) {
        const userCGPAData = data[0];
        
        // Try and convert CGPA to a number
        const cgpa = parseFloat(userCGPAData.CGPA);
  
        if (!isNaN(cgpa)) { // Check if conversion was successful
          setUserCGPA(cgpa);
        } else {
          // Handle case where CGPA is not a valid number
          console.log("CGPA is not a valid number.");
          setUserCGPA(null);
        }
      } else {
        console.log("No CGPA data found for the user.");
        setUserCGPA(null);
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      setUserCGPA(null); // Ensure user CGPA is set to null in case of error
    }
  };
  

  useEffect(() => {
    fetchCatalog();
    fetchUserCourses();
    fetchUserCGPA();
  }, []);

  // Filter catalog by year and semester
  const filterCatalogCourses = (year, semester) => {
    return catalog.filter(
      (course) =>
        course.RecommendedYear === year &&
        course.RecommendedSemester === semester
    );
  };

  // Filter user courses by a semester catalog
  const filterUserCoursesForSemester = (filteredCatalogCourses) => {
    if (!Array.isArray(userCourses) || userCourses.length === 0) {
      return [];
    }

    return userCourses.filter((userCourse) =>
      filteredCatalogCourses.some(
        (catalogCourse) => catalogCourse.CRN === userCourse.CRN
      )
    );
  };

  return (
    <>
      <div className="p-3">
        <AcademicSummaryBanner cgpa={userCGPA} />
        <div className="flex flex-col items-center">
          <h1 className="py-5 text-2xl">Computer Science Roadmap</h1>
          <div className="flex flex-row">
            <div className="flex flex-row items-center mx-2">
              <FaCheckCircle color="green" />
              <p>=Completed</p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <FaTimesCircle color="red" />
              <p>=Incomplete</p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <FaUserCheck color="blue" />
              <p>=Enrolled</p>
            </div>
            <div className="flex flex-row items-center mx-2">
              <FaRegCircle />
              <p>=Not Taken</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 h-full md:grid-cols-2">
          {Array.from({ length: 8 }, (_, i) => {
            const year = Math.ceil((i + 1) / 2);
            const semesterStr = i % 2 === 0 ? "Fall" : "Spring";
            const semesterCatalogCourses = filterCatalogCourses(
              year,
              semesterStr
            );
            const semesterUserCourses = filterUserCoursesForSemester(
              semesterCatalogCourses
            );

            return (
              <WhatIfSemester
                key={i + 1}
                number={i + 1}
                semesterCatalogData={semesterCatalogCourses}
                userCourses={semesterUserCourses}
                catalogData={catalog}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
