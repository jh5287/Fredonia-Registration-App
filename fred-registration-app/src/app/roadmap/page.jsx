"use client";
import { useState, useEffect } from "react";
import Semester from "./Semester";
import AcademicSummaryBanner from "@/components/AcademicSummary";
import { fetchCatalog, fetchUserCourses, fetchUserCGPA } from './apiCalls'; 
import { useSession } from "next-auth/react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";

const RoadMap = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const loadData = async () => {
      try {
        const catalogData = await fetchCatalog();
        setCatalog(catalogData);
        
        const coursesData = await fetchUserCourses();
        setUserCourses(coursesData);
        
        const cgpaData = await fetchUserCGPA();
        setUserCGPA(cgpaData); // Assuming you process or extract the CGPA from the data as needed
      } catch (error) {
        // Handle or log the error as needed
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  // Filter catalog by year and semester
  const filterCoursesByTerm = (year, semester, catUserCoursemap) => {
    return catUserCoursemap.filter(
      (course) =>
        course.RecommendedYear === year &&
        course.RecommendedSemester === semester
    );
  };

  const isFoundationCourse = (course) => {
    return course.Course.CourseAttribute.some(
      (attributeObj) => attributeObj.Attribute.Description === "Foundation"
    );
  };

  const getFoundationCourses = (userCourses) => {
    var foundationCourses = [];

    if (Array.isArray(userCourses) && userCourses.length > 0) {
      userCourses.forEach(function (courseInfo) {
        const isFoundation = isFoundationCourse(courseInfo);

        if (isFoundation) {
          foundationCourses.push(courseInfo);
        }
      });
    }

    return foundationCourses;
  };

  const filterToLatestAttempts = (userCourses) => {
    if(!userCourses){
      return [];
    }
    const courseMap = new Map();
    userCourses.forEach((course) => {
      // Check if this course (by CRN) has been encountered before
      // and if the current one is more recent based on TermID.
      if (
        !courseMap.has(course.Course.CRN) ||
        courseMap.get(course.Course.CRN).TermID < course.TermID
      ) {
        courseMap.set(course.Course.CRN, course);
      }
    });

    // Convert the Map values back to an array
    return Array.from(courseMap.values());
  };

  const createCatalogToUserCourseMap = (catalog, userCourses) => {
    const foundationCourses = getFoundationCourses(userCourses);

    return catalog.map((catalogCourse) => {
      const matchingUserCourse = userCourses.find(
        (userCourse) => userCourse.Course.CRN === catalogCourse.Course.CRN
      );

      var studentCourseRecord;

      if (isFoundationCourse(catalogCourse)) {
        if (foundationCourses.length > 0) {
          studentCourseRecord = foundationCourses.shift();
        } else {
          studentCourseRecord = catalogCourse;
        }
      } else {
        studentCourseRecord = matchingUserCourse || catalogCourse;
      }

      return {
        StudentCourseRecord: studentCourseRecord,
        RecommendedSemester: catalogCourse.RecommendedSemester,
        RecommendedYear: catalogCourse.RecommendedYear,
      };
    });
  };

  const latestAttemptUserCourses = filterToLatestAttempts(userCourses);
  const catalogUserCourseMap = createCatalogToUserCourseMap(
    catalog,
    latestAttemptUserCourses || []
  );

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
            const semester = i % 2 === 0 ? "Fall" : "Spring";
            const semesterCourses = filterCoursesByTerm(
              year,
              semester,
              catalogUserCourseMap
            );
            return (
              <Semester key={i + 1} number={i + 1} courses={semesterCourses} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
