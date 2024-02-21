"use client";
import { useState, useEffect } from "react";
import Semester from "@/components/Semester";
import { GetCatalog } from "../api/sqlserver/queries";

const RoadMap = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    // Assume GetCatalog() fetches all courses, then filters are applied per semester
    const fetchCatalog = async () => {
      try {
        const fullCatalog = await GetCatalog(1);
        setCatalog(fullCatalog);
      } catch (err) {
        console.error("Failed to fetch catalog:", err);
      }
    };

    fetchCatalog();
  }, []);

  const filterCourses = (year, semester) => {
    if (!Array.isArray(catalog) || catalog.length === 0) {
      return [];
    }

    const filteredCourses = catalog.filter(course =>
      course.RecommendedYear === year &&
      course.RecommendedSemester === semester
    );

    console.log(filteredCourses); 
    return filteredCourses;
  };


  return (
    <>
      <h1 className="p-3 py-5 text-2xl">Computer Science Roadmap</h1>
      <div className="m-3 grid grid-cols-1 gap-5 h-full md:grid-cols-2">
        <Semester key={1} number={1} data={filterCourses(1, "Fall")} />
        <Semester key={2} number={2} data={filterCourses(1, "Spring")} />
        <Semester key={3} number={3} data={filterCourses(2, "Fall")} />
        <Semester key={4} number={4} data={filterCourses(2, "Spring")} />
        <Semester key={5} number={5} data={filterCourses(3, "Fall")} />
        <Semester key={6} number={6} data={filterCourses(3, "Spring")} />
        <Semester key={7} number={7} data={filterCourses(4, "Fall")} />
        <Semester key={8} number={8} data={filterCourses(4, "Spring")} />
      </div>
    </>
  );
};

export default RoadMap;
