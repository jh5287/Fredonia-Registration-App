"use client";
import { useState, useEffect } from "react";
import Semester from "./Semester";
import {
  fetchCatalogCourses,
  fetchUserCourses,
  fetchUserCGPA,
  fetchStudentInfo,
} from "./apiCalls";
import { useSession } from "next-auth/react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserCheck,
  FaRegCircle,
} from "react-icons/fa";
import TitleCard from "@/components/TitleCard";

const RoadMap = () => {
  const [open, setOpen] = useState(Array(8).fill(true));
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

        console.log("TEST"); 
        const cgpaData = await fetchUserCGPA();
        console.log("HERE", cgpaData);  
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
    if (!userCourses) {
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
    latestCourseAttempts || []
  );

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
      const changeOpen = open.map((isOpen) => (isOpen === false ? true : true));
      setOpen(changeOpen);
    }
  };

  const toggleSemester = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <>
      <div className="p-3 mb-10">

        <div className="relative flex flex-col items-center">
          <TitleCard />
          {/* md:absolute md:right-2 md:top-3*/}
          <div className="md:fixed md:bottom-4 md:right-4 md:bg-base-200 md:rounded-md md:z-50 form-control">
            <label className="label cursor-pointer">
              <span className="p-2 label-text">Toggle Semester</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                onChange={() => {
                  toggleAllSemester();
                }}
                checked={open[0]}
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 h-full lg:grid-cols-2 py-2">
          {Array.from({ length: 8 }, (_, i) => {
            const year = Math.ceil((i + 1) / 2);
            const semester = i % 2 === 0 ? "Fall" : "Spring";
            const semesterCourses = filterCoursesByTerm(
              year,
              semester,
              catalogUserCourseMap
            );
            //console.log("Semester user courses", semesterUserCourses);
            return (
              <div className="border rounded-lg border-slate-150" key={i}>
                <Semester
                  key={i + 1}
                  number={i + 1}
                  courses={semesterCourses}
                  toggleSemester={toggleSemester}
                  open={open[i]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
