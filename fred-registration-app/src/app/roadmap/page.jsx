"use client";
import { useState, useEffect } from "react";
import Semester from "./Semester";
import AcademicSummaryBanner from "@/components/AcademicSummary";
import { fetchCatalogCourses, fetchUserCourses, fetchUserCGPA, fetchStudentInfo } from './apiCalls'; 
import { useSession } from "next-auth/react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";
import StudentInfoBanner from "@/components/StudentInfo";

const RoadMap = () => {
  const [catalogCourses, setCatalogCourses] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
  const [userCGPA, setUserCGPA] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null); 
  const { data: session, status } = useSession();

  useEffect(() => {
    const loadData = async () => {
      try {
        const catalogData = await fetchCatalogCourses();
        setCatalogCourses(catalogData);
        
        const userCourseData = await fetchUserCourses();
        setUserCourses(userCourseData);
        
        const cgpaData = await fetchUserCGPA();
        setUserCGPA(cgpaData); 

        const studentInfoData = await fetchStudentInfo();
        setStudentInfo(studentInfoData); 

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);


  const filterCoursesByTerm = (year, semester, courses) => {
    return courses.filter(
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
      userCourses.forEach(function (course) {
        const isFoundation = isFoundationCourse(course);

        if (isFoundation) {
          foundationCourses.push(course);
        }
      });
    }

    return foundationCourses;
  };

  // Filter courses to only include latest attemps
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

  const latestCourseAttempts = filterToLatestAttempts(userCourses);
  const catalogUserCourseMap = createCatalogToUserCourseMap(
    catalogCourses,
    latestCourseAttempts|| []
  );

  return (
    <>
      <div className="p-3">
        <StudentInfoBanner studentInfo={studentInfo}/>
        <div className="py-3"></div>
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
