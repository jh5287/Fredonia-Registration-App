"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import { useSession } from "next-auth/react";

const RoadMap = () => {
  const [catalog, setCatalog] = useState([]);
  const [userCourses, setUserCourses] = useState(null);
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
      const userEmail = "camronwalsh@gmail.com";
      const response = await fetch(
        "/api/studentCourses?email=camronwalsh@gmail.com"
      );
      const data = await response.json();
      setUserCourses(data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  useEffect(() => {
    fetchCatalog();
    fetchUserCourses();
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
      <h1 className="p-3 py-5 text-2xl">Computer Science Roadmap</h1>
      <div className="m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2">
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
            <Semester
              key={i + 1}
              number={i + 1}
              catalogData={semesterCatalogCourses}
              userCourses={semesterUserCourses}
            />
          );
        })}
      </div>
    </>
  );
};

export default RoadMap;
