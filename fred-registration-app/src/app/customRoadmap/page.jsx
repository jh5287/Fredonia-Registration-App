"use client";
import { useState } from "react";
import CustomSemester from "./CustomSemester";
import CourseSearch from "@/components/courseSearch";
import {
  BsArrowBarLeft,
  BsArrowBarRight
} from "react-icons/bs";

function Sidebar({}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen ">
      <nav className={`h-full ${expanded ? ' shadow-md px-2' : ''}`}>
        <button onClick={() => setExpanded((curr) => !curr)} >
          {expanded ?  <BsArrowBarRight className="size-8"/> : <BsArrowBarLeft className="size-8" /> }
        </button>
        <div className={`overflow-hidden ${expanded ? "w-full" : "w-0"}`}>
          <CourseSearch/>
        </div>
      </nav>
    </aside>
  );
}

export default function customRoadmap() {
  const createDefaultCourse = () => ({
    courseCode: "",
    courseTitle: "",
    credits: "",
  });
  
  const createDefaultSemester = (semesterNum) => ({
    semesterNum,
    courses: Array.from({ length: 5 }, (_, index) => createDefaultCourse()),
  });
  
  const [semestersData, setSemesterData] = useState(
    Array.from({ length: 8 }, (_, index) => createDefaultSemester(index + 1))
  );
  
  return (
    <>
      <div className="flex flex-row gap-x-4 h-screen w-full">
        <div className="relative flex-1 ">
          <div className="grid grid-cols-2 gap-5 h-full py-2">
            {semestersData.map((semester) => (
              <CustomSemester
              key={semester.semesterNum}
              semesterNum={semester.semesterNum}
              courses={semester.courses}
              />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

