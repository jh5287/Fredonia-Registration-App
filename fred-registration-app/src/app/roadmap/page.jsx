"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import AcademicSummaryBanner from "@/components/AcademicSummary";
import { useSession } from "next-auth/react";
import { FaCheckCircle, FaTimesCircle, FaUserCheck, FaRegCircle } from "react-icons/fa";

const RoadMap = () => {
  const [open, setOpen] = useState(Array(8).fill(true));
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

  //const getUserGrades = 

  const toggleAllSemester = () => {
    const checkSameValue = () => {
      if (!Array.isArray(open) || open.length === 0) {
        return false;
      }

      const firstValue = open[0];
      return open.every((value) => value === firstValue);
    };
    let allSame = checkSameValue();
    if (allSame) {
      setOpen(open.map((isOpen) => !isOpen));
    } else {
      const changeOpen = open.map((isOpen) => isOpen === false ? true : true);
      setOpen(changeOpen);
    }
  }

  const toggleSemester = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  }

  return (
    <>
      <div className="p-3 mb-10">
        <AcademicSummaryBanner cgpa={userCGPA} />
        <div className="relative flex flex-col items-center">
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
          {/* md:absolute md:right-2 md:top-3*/}
            <div className="md:fixed md:bottom-4 md:right-4 md:bg-base-200 md:rounded-md md:z-50 form-control">
              <label className="label cursor-pointer">
                <span className="p-2 label-text">Toggle Semester</span> 
                <input 
                type="checkbox" 
                className="toggle toggle-primary"
                onChange={() => {toggleAllSemester()}}
                checked={open[0]}
                 />
              </label>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-5 h-full">
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
              //console.log("Semester user courses", semesterUserCourses);
            return (
              <Semester
                key={i + 1}
                number={i + 1}
                catalogData={semesterCatalogCourses}
                userCourses={semesterUserCourses}
                open={open[i]}
                toggleSemester={toggleSemester}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
